'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CIRCLE_BREAK_POINT = 850;
const BREAK_POINT = 980;

const technologies = [
    {
        name: 'JavaScript',
        shortName: 'JS',
        color: '#F7DF1E',
        textColor: '#000000',
        borderColor: '#D4BE0C',
    },
    {
        name: 'TypeScript',
        shortName: 'TS',
        color: '#3178C6',
        textColor: '#ffffff',
        borderColor: '#2563A3',
    },
    {
        name: 'React',
        shortName: 'React',
        color: '#61DAFB',
        textColor: '#000000',
        borderColor: '#4FA8C6',
    },
    {
        name: 'Vite',
        shortName: 'Vite',
        color: '#646CFF',
        textColor: '#ffffff',
        borderColor: '#4B50CC',
    },
    {
        name: 'Next.js',
        shortName: 'Next',
        color: '#000000',
        textColor: '#ffffff',
        borderColor: '#333333',
    },
    {
        name: 'Tailwind CSS',
        shortName: 'TW',
        color: '#06B6D4',
        textColor: '#ffffff',
        borderColor: '#0891B2',
    },
    {
        name: 'Premiere Pro',
        shortName: 'Pr',
        color: '#9999FF',
        textColor: '#ffffff',
        borderColor: '#7A7ACC',
    },
];

export default function TechStack() {
    const [isCircleMode, setIsCircleMode] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsCircleMode(width < CIRCLE_BREAK_POINT);
            setIsSmallScreen(width < BREAK_POINT);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-4 sm:py-6 tablet:py-10 xl:py-12 min-w-[320px]"
        >
            <h2 className="text-base sm:text-lg tablet:text-2xl xl:text-3xl font-bold text-center mb-3 sm:mb-4 tablet:mb-8 xl:mb-10 px-2">
                기술 스택
            </h2>
            <div className="relative w-full overflow-hidden">
                <div className="container mx-auto overflow-x-auto scrollbar-hide">
                    <div
                        className={`flex ${
                            isCircleMode ? 'flex-wrap' : 'flex-nowrap'
                        } justify-center gap-2 sm:gap-3 tablet:gap-5 w-max mx-auto px-4 sm:px-6 tablet:px-8 py-4 sm:py-5 tablet:py-6`}
                    >
                        {technologies.map((tech, index) => (
                            <motion.button
                                key={tech.name}
                                style={{
                                    backgroundColor: tech.color,
                                    color: tech.textColor,
                                    border: `2px solid ${tech.borderColor}`,
                                    boxShadow: `0 2px 4px -1px ${tech.borderColor}40`,
                                }}
                                className={`
                                    ${
                                        isCircleMode
                                            ? 'w-[45px] h-[45px] p-0 aspect-square'
                                            : `px-4 py-2 ${
                                                  isSmallScreen
                                                      ? 'text-sm'
                                                      : 'tablet:px-6 tablet:py-2.5'
                                              }`
                                    }
                                    rounded-full whitespace-nowrap
                                    text-[11px] sm:text-sm tablet:text-base
                                    font-medium flex-shrink-0 backdrop-blur-sm
                                    flex items-center justify-center
                                    transition-all duration-300
                                `}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: 'spring',
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: [null, 1.1],
                                    boxShadow: `0 4px 8px -1px ${tech.borderColor}60`,
                                    transition: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 15,
                                    },
                                }}
                            >
                                {isCircleMode ? tech.shortName : tech.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
                {isCircleMode && (
                    <>
                        <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
                    </>
                )}
            </div>
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @media (max-width: 640px) {
                    .scrollbar-hide {
                        -webkit-overflow-scrolling: touch;
                    }
                }
            `}</style>
        </motion.section>
    );
}
