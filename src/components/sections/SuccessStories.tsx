'use client';

import { motion } from 'framer-motion';

interface SuccessCase {
    title: string;
    description: string;
    metrics: {
        label: string;
        value: string;
        change: string;
    }[];
}

const successCases: SuccessCase[] = [
    {
        title: '매출 2배 성장한 자영업자의 AI 활용법',
        description:
            'AI 마케팅 도구를 활용해 타겟 고객 분석과 맞춤형 프로모션을 진행한 결과, 6개월 만에 매출이 2배로 증가했습니다.',
        metrics: [
            { label: '매출 증가', value: '200%', change: '+100%' },
            { label: '고객 재방문율', value: '68%', change: '+45%' },
            { label: '마케팅 비용', value: '30%', change: '-70%' },
        ],
    },
    {
        title: '업무 시간 50% 단축한 직장인의 노하우',
        description:
            'GPT를 활용한 업무 자동화로 반복적인 작업 시간을 크게 줄이고, 핵심 업무에 더 집중할 수 있게 되었습니다.',
        metrics: [
            { label: '업무 시간', value: '4시간', change: '-50%' },
            { label: '업무 처리량', value: '180%', change: '+80%' },
            { label: '실수 감소율', value: '90%', change: '-90%' },
        ],
    },
    {
        title: 'AI로 새로운 서비스를 론칭한 스타트업',
        description:
            'AI 기술을 활용해 기존 시장의 문제점을 해결하는 혁신적인 서비스를 개발하여 성공적으로 시장에 진출했습니다.',
        metrics: [
            { label: '초기 사용자', value: '10만명', change: '+1000%' },
            { label: '투자 유치', value: '20억원', change: 'NEW' },
            { label: '시장 점유율', value: '35%', change: '+35%' },
        ],
    },
];

export default function SuccessStories() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-gray-900 to-blue-900 text-white py-20"
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
                        성공을 향한 도약
                    </h2>
                    <p className="text-2xl md:text-3xl text-blue-300 font-medium mb-4">
                        "상상이 현실이 되는 순간,"
                    </p>
                    <p className="text-xl md:text-2xl text-gray-300">
                        여러분의 이야기가 시작됩니다.
                    </p>
                </motion.div>

                {/* 성공 사례 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {successCases.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105"
                        >
                            <h3 className="text-xl font-bold mb-4">
                                {story.title}
                            </h3>
                            <p className="text-gray-300 mb-6">
                                {story.description}
                            </p>
                            <div className="space-y-4">
                                {story.metrics.map((metric, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-gray-400">
                                            {metric.label}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-bold">
                                                {metric.value}
                                            </span>
                                            <span
                                                className={`text-sm ${
                                                    metric.change.startsWith(
                                                        '+'
                                                    )
                                                        ? 'text-green-400'
                                                        : metric.change ===
                                                          'NEW'
                                                        ? 'text-blue-400'
                                                        : 'text-red-400'
                                                }`}
                                            >
                                                {metric.change}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <a
                        href="#case-studies"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                    >
                        <span>AI 실전 사례 보기</span>
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
