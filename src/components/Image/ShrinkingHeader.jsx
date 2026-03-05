import { useState, useEffect, useRef } from "react"

export const useScrollShrink = () => {
    const sectionRef = useRef(null)
    const targetRef = useRef(null)
    const rectsRef = useRef(null) // null = no calculado aún
    const [progress, setProgress] = useState(0)
    const [hasShrunk, setHasShrunk] = useState(false)
    const [rects, setRects] = useState({
        sectionWidth: '100%',
        sectionHeight: '100%',
        targetTop: 0,
        targetLeft: 0,
        targetWidth: '100%',
        targetHeight: '100%'
    })

    const calculateRects = () => {
        if (!sectionRef.current || !targetRef.current) return false

        const sectionRect = sectionRef.current.getBoundingClientRect()
        const targetRect = targetRef.current.getBoundingClientRect()

        const newRects = {
            sectionWidth: sectionRect.width,
            sectionHeight: sectionRect.height,
            targetTop: targetRect.top - sectionRect.top,
            targetLeft: targetRect.left - sectionRect.left,
            targetWidth: targetRect.width,
            targetHeight: targetRect.height,
        }

        rectsRef.current = newRects
        setRects(newRects)
        return true
    }

    useEffect(() => {
        window.addEventListener("resize", calculateRects)
        return () => window.removeEventListener("resize", calculateRects)
    }, [])

    useEffect(() => {
        if (hasShrunk) return

        const handleScroll = () => {
            if (!sectionRef.current) return

            const rect = sectionRef.current.getBoundingClientRect()
            const startScroll = 300

            // ← calcular rects lazy, justo cuando la sección está por entrar
            if (rect.top < startScroll + 100 && rectsRef.current === null) {
                calculateRects()
            }

            if (rectsRef.current === null) return // todavía no está listo

            const distance = Math.max(rectsRef.current.targetTop, 300)

            if (rect.top > startScroll) {
                setProgress(0)
            } else {
                const p = Math.min(Math.max((startScroll - rect.top) / distance, 0), 1)
                setProgress(p)
                if (p === 1) setHasShrunk(true)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [hasShrunk])

    return { sectionRef, targetRef, progress, hasShrunk, rects }
}