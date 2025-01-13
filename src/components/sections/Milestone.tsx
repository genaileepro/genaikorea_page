'use client';

import { motion } from 'framer-motion';

interface Achievement {
    metric: string;
    description: string;
}

const achievements: Achievement[] = [
    {
        metric: '100+',
        description: '성공적인 프로젝트 경험',
    },
    {
        metric: '50+',
        description: '기업 교육 실적',
    },
    {
        metric: '95%',
        description: '고객 만족도',
    },
];

export default function Milestone() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full py-20 bg-blue-500 text-white"
        >
            <div className="container mx-auto max-w-5xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6"
                >
                    <p className="text-lg font-medium text-blue-100">전환점</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        &ldquo;더 큰 꿈을 향해&rdquo;
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        학습을 넘어 실현으로,
                        <br />
                        이제는 전문가와 함께할 시간입니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-center mb-12">
                        왜 코드러너일까요?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement) => (
                            <motion.div
                                key={achievement.metric}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold mb-4">
                                    {achievement.metric}
                                </div>
                                <div className="text-blue-100">
                                    {achievement.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl mb-8">
                        여러분의 비전을 현실로 만들어드립니다
                    </p>
                    <a
                        href="#consulting"
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-500 rounded-lg transition-colors hover:bg-blue-50"
                    >
                        <span className="mr-2">무료 컨설팅 받기</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
