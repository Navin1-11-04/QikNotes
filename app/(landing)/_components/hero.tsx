"use client";
import { useEffect } from "react";
import initParticles from "../_components/fluid-particles/script";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const canvas = document.getElementById(
        "canvas"
      ) as HTMLCanvasElement | null;
      if (canvas) {
        const gl = canvas.getContext("webgl");
        if (gl) {
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
      }
      initParticles(theme);
    }
  }, [theme]);

  return(
    <div className="w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <canvas id="canvas" className="h-full w-full"></canvas>
    </div>
);
}
