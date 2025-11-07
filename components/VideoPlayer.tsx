'use client';

import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player'

// const ReactPlayer = dynamic(() => import('react-player'), {
//     ssr: false,
// }) as any

interface VideoPlayerProps {
    src: string
    className?: string
}

export default function VideoPlayer({ src, className }: VideoPlayerProps) {
    return (
        <div className="absolute inset-0">
            <ReactPlayer
                src={src}
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                light={true}
                playsInline={true}
                className={className}
            />
        </div>
    )
}
