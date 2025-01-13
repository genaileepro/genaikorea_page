'use client';

import { motion } from 'framer-motion';

interface Achievement {
    value: string;
    label: string;
}

const achievements: Achievement[] = [
    {
        value: '100+',
        label: '성공적인 프로젝트 경험',
    },
    {
        value: '50+',
        label: '기업 교육 실적',
    },
    {
        value: '95%',
        label: '고객 만족도',
    },
];

export default function TurningPoint() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-blue-900 to-gray-900 text-white py-20"
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
                        전환점: "더 큰 꿈을 향해"
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4 text-center text-xl md:text-2xl text-gray-300">
                        <p>"학습을 넘어 실현으로,</p>
                        <p>이제는 전문가와 함께할 시간입니다."</p>
                    </div>
                </motion.div>

                {/* 성과 지표 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-400">
                        왜 코드러너일까요?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-gray-700/50 transition-all hover:scale-105"
                            >
                                <div className="text-4xl font-bold text-blue-400 mb-4">
                                    {achievement.value}
                                </div>
                                <div className="text-lg text-gray-300">
                                    {achievement.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 비전 메시지 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mb-12"
                >
                    <p className="text-xl md:text-2xl text-blue-400 font-medium">
                        여러분의 비전을 현실로 만들어드립니다.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center"
                >
                    <a
                        href="#consulting"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                    >
                        <span>무료 컨설팅 받기</span>
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
