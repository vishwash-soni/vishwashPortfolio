import { useEffect, useRef, useState } from "react";

// IconCloud - ek 3D rotating tag/icon cloud, MagicUI jaisa, sirf React + Canvas + Tailwind se
// Usage: <IconCloud icons={["react","javascript","typescript","tailwindcss","nodedotjs","firebase","html5","css3","git","github"]} />
// icons array me "simple-icons" ke slugs daalo (https://simpleicons.org par slug list milegi)

export default function IconCloud({ icons = [], size = 420 }) {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  const stateRef = useRef({
    rotationX: 0,
    rotationY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    autoRotate: true,
  });

  // Icons load karo (simple-icons CDN se svg -> img)
  useEffect(() => {
    let cancelled = false;
    const loaded = new Array(icons.length).fill(null);
    let count = 0;

    icons.forEach((slug, i) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `https://cdn.simpleicons.org/${slug}`;
      img.onload = () => {
        loaded[i] = img;
        count++;
        if (count === icons.length && !cancelled) {
          imagesRef.current = loaded;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        count++;
        if (count === icons.length && !cancelled) {
          imagesRef.current = loaded;
          setImagesLoaded(true);
        }
      };
    });

    return () => {
      cancelled = true;
    };
  }, [icons]);

  // Sphere par points nikalne ka logic (Fibonacci sphere - evenly spaced points)
  const getSpherePoints = (count, radius) => {
    const points = [];
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle

    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      points.push({ x: x * radius, y: y * radius, z: z * radius });
    }
    return points;
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const radius = size * 0.38;
    const iconSize = 36;
    const points = getSpherePoints(icons.length, radius);
    let animationId;

    const render = () => {
      const state = stateRef.current;

      // Auto rotate jab drag nahi ho raha
      if (state.autoRotate && !state.isDragging) {
        state.targetRotationY += 0.003;
      }

      // Smooth easing
      state.rotationX += (state.targetRotationX - state.rotationX) * 0.1;
      state.rotationY += (state.targetRotationY - state.rotationY) * 0.1;

      ctx.clearRect(0, 0, size, size);

      const cosX = Math.cos(state.rotationX);
      const sinX = Math.sin(state.rotationX);
      const cosY = Math.cos(state.rotationY);
      const sinY = Math.sin(state.rotationY);

      const projected = points.map((p, i) => {
        // Y axis rotation
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y;

        // X axis rotation
        let y2 = y * cosX - z * sinX;
        let z2 = y * sinX + z * cosX;

        const scale = (z2 + radius * 2) / (radius * 3);
        const screenX = size / 2 + x;
        const screenY = size / 2 + y2;

        return { screenX, screenY, scale, z: z2, img: imagesRef.current[i] };
      });

      // Peeche wale pehle draw karo (painter's algorithm)
      projected.sort((a, b) => a.z - b.z);

      projected.forEach(({ screenX, screenY, scale, img }) => {
        if (!img) return;
        const s = iconSize * scale;
        const alpha = Math.max(0.25, scale);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(screenX, screenY, s / 2 + 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();
        ctx.drawImage(img, screenX - s / 2, screenY - s / 2, s, s);
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    // Mouse / touch drag events
    const handlePointerDown = (e) => {
      const state = stateRef.current;
      state.isDragging = true;
      state.lastX = e.clientX ?? e.touches?.[0]?.clientX;
      state.lastY = e.clientY ?? e.touches?.[0]?.clientY;
    };

    const handlePointerMove = (e) => {
      const state = stateRef.current;
      if (!state.isDragging) return;
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      const dx = clientX - state.lastX;
      const dy = clientY - state.lastY;
      state.targetRotationY += dx * 0.005;
      state.targetRotationX -= dy * 0.005;
      state.lastX = clientX;
      state.lastY = clientY;
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    canvas.addEventListener("mousedown", handlePointerDown);
    canvas.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousedown", handlePointerDown);
      canvas.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [imagesLoaded, icons.length, size]);

  return (
    <div className="flex items-center justify-center w-full">
      {!imagesLoaded && (
        <div
          style={{ width: size, height: size ,}}
          className="flex items-center justify-center text-gray-400 text-sm"
        >
          Loading icons...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`cursor-grab active:cursor-grabbing ${
          imagesLoaded ? "block" : "hidden"
        }`}
      />
    </div>
  );
}

// ==== Example ka use kaise karein ====
// import IconCloud from "./IconCloud";
//
// function App() {
//   const skillIcons = [
//     "react", "javascript", "typescript", "tailwindcss", "nodedotjs",
//     "firebase", "supabase", "html5", "css3", "git", "github",
//     "vercel", "netlify", "figma", "mongodb", "cplusplus"
//   ];
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center">
//       <IconCloud icons={skillIcons} size={420} />
//     </div>
//   );
// }
// export default App;