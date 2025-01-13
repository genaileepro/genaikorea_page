'use client';

import { motion } from 'framer-motion';

interface Step {
    number: string;
    title: string;
    description: string;
    link: {
        text: string;
        href: string;
    };
}

const steps: Step[] = [
    {
        number: '1️⃣',
        title: '무료 강의로 기초 다지기',
        description:
            'AI의 기본 개념부터 실전 활용법까지 체계적으로 학습합니다.',
        link: {
            text: '무료 강의 시청하기',
            href: '#free-course',
        },
    },
    {
        number: '2️⃣',
        title: '실전 노하우 습득하기',
        description: '실제 프로젝트에 적용할 수 있는 실전 노하우를 배웁니다.',
        link: {
            text: '실전 사례 보기',
            href: '#case-studies',
        },
    },
    {
        number: '3️⃣',
        title: '전문가와 상담하기',
        description: '여러분의 상황에 맞는 맞춤형 솔루션을 제안받으세요.',
        link: {
            text: '무료 상담 신청',
            href: '#consulting',
        },
    },
];

export default function GetStarted() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* 섹션 헤드라인 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        시작하기
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300">
                        여러분의 AI 여정, 지금 시작하세요
                    </p>
                </motion.div>

                {/* 단계별 가이드 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105"
                        >
                            <div className="text-4xl mb-4">{step.number}</div>
                            <h3 className="text-xl font-bold mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 mb-6">
                                {step.description}
                            </p>
                            <a
                                href={step.link.href}
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors gap-2"
                            >
                                <span>{step.link.text}</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* 최종 CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <div className="max-w-2xl mx-auto mb-8">
                        <p className="text-xl text-gray-300">
                            AI 전문가와 함께라면 더 빠르고 효과적으로 목표를
                            달성할 수 있습니다.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                    >
                        <span>지금 바로 시작하기</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
