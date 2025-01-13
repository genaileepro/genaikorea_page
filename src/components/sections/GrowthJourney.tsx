'use client';

import { motion } from 'framer-motion';

interface GuideItem {
    title: string;
    description: string;
    icon: string;
}

const guides: GuideItem[] = [
    {
        title: 'GPT 실전 활용 가이드',
        description:
            '실무에서 바로 활용할 수 있는 GPT 프롬프트 작성법과 활용 전략을 배웁니다.',
        icon: '📚',
    },
    {
        title: 'AI 비즈니스 적용 사례',
        description:
            '다양한 산업에서 AI를 성공적으로 도입한 실제 사례를 분석합니다.',
        icon: '💡',
    },
    {
        title: '즉시 활용 가능한 실습',
        description:
            '이론을 넘어 실전에서 바로 적용할 수 있는 실습 위주의 학습을 진행합니다.',
        icon: '🔨',
    },
];

export default function GrowthJourney() {
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        함께 성장하는 여정
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-center text-xl md:text-2xl text-gray-300">
                        <p>"처음엔 저도 여러분처럼 막막했습니다.</p>
                        <p>하지만 실전 경험을 통해 깨달았습니다.</p>
                        <p className="text-blue-400">
                            AI는 어려운 기술이 아닌, 우리의 가능성을 넓혀주는
                            동반자라는 것을..."
                        </p>
                    </div>
                </motion.div>

                {/* 노하우 섹션 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-400">
                        현장에서 검증된 노하우를 나눕니다
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {guides.map((guide, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105"
                            >
                                <div className="text-4xl mb-4">
                                    {guide.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4">
                                    {guide.title}
                                </h4>
                                <p className="text-gray-300">
                                    {guide.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <a
                        href="#free-course"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                    >
                        <span>GPT 무료 강의 시청하기</span>
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
