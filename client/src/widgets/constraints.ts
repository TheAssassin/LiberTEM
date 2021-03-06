export const inRectConstraint = (width: number, height: number) => (p: Point2D) => {
    return {
        x: Math.max(0, Math.min(width, p.x)),
        y: Math.max(0, Math.min(height, p.y)),
    }
}

export const dist = (cx: number, cy: number, x: number, y: number) => {
    const dx = cx - x;
    const dy = cy - y;
    return Math.sqrt(dx * dx + dy * dy);
}

export const cbToRadius = (cx: number, cy: number, cb: ((r: number) => void) | undefined) => (x: number, y: number) => cb && cb(dist(cx, cy, x, y))

export const keepOnCY = (cy: number) => (p: Point2D) => {
    return {
        x: p.x,
        y: cy,
    }
}

export const keepXLargerThan = (otherX: number) => (p: Point2D) => {
    return {
        x: otherX > p.x ? otherX : p.x,
        y: p.y,
    }
}

export const keepXSmallerThan = (otherX: number) => (p: Point2D) => {
    return {
        x: otherX < p.x ? otherX : p.x,
        y: p.y,
    }
}

export const riConstraint = (outerPos: number, cy: number) => (p: Point2D) => {
    return keepXLargerThan(outerPos)(
        keepOnCY(cy)(p)
    );
}

export const roConstraints = (innerPos: number, cy: number) => (p: Point2D) => {
    return keepXSmallerThan(innerPos)(
        keepOnCY(cy)(p)
    );
}