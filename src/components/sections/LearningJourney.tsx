'use client';

import { motion } from 'framer-motion';

interface JourneyStep {
    title: string;
    description: string;
    icon: string;
}

const journeySteps: JourneyStep[] = [
    {
        title: 'AI의 기초부터 시작하기',
        description:
            'ChatGPT와 Cursor AI의 기본 사용법부터 실전에서 활용할 수 있는 프롬프트 작성법까지 차근차근 배워봅니다.',
        icon: '🎯',
    },
    {
        title: '실전 프로젝트 경험',
        description:
            '실제 업무에서 발생하는 문제들을 AI로 해결하는 방법을 배우고, 직접 프로젝트에 적용해봅니다.',
        icon: '💡',
    },
    {
        title: '전문가와 함께 성장',
        description:
            'AI 전문가의 1:1 피드백을 통해 더 효율적인 AI 활용 방법을 찾고, 함께 성장해 나갑니다.',
        icon: '🚀',
    },
];

export default function LearningJourney() {
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
                        함께 성장하는 여정
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300">
                        AI를 어려워하시는 분들을 위해 준비했습니다
                    </p>
                </motion.div>

                {/* 여정 단계 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {journeySteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
                        >
                            <div className="text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 다음 섹션으로의 연결 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-20"
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        이미 많은 분들이 AI와 함께 성장하고 있습니다
                    </h3>
                    <p className="text-xl text-gray-300">
                        실제 성공 사례를 통해 AI의 가능성을 확인해보세요
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
