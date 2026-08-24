import { useEffect, useRef, useState } from "react";
import type { ProgressBarProps } from "../types";
import { getLevel } from "../utils/helper";
import { useInView, motion } from 'framer-motion';

export function ProgressBar({ icon, title, value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));
  const level = getLevel(safeValue);

  const [progress,setProgress]=useState<number>(0); // Initie progress à 0

  const ref=useRef(null) // Garder la reference

  const inView=useInView(ref,{once:true}) // Pase a true si c'est visinme

  useEffect(()=>{
    if(!inView) return ; 

    const interval=setInterval(()=>{

      setProgress((prev)=>{
        if(prev==value){
          clearInterval(interval)
          return value
        }
        return prev + 1

      })

    },20)

    return ()=>clearInterval(interval)

  },[inView])


  return (
    <motion.div ref={ref}  className="flex flex-col gap-2 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center h-9 w-9 rounded-lg bg-(--background) border border-(--border) text-(--primary) text-lg shrink-0">
            <i className={icon} />
          </span>
          <span className="text-(--text) font-medium text-base md:text-lg">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-xs font-mono font-medium ${level.className}`}>
            {level.label}
          </span>
          <span className="text-(--text-muted) font-mono text-sm w-10 text-right">
            {progress}%
          </span>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={title}
        className="h-2 w-full rounded-full bg-(--border) overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-(--primary)"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}