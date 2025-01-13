'use client';

import { motion } from 'framer-motion';

export default function EmpathySection() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-4 py-20">
                {/* 메인 타이틀 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        AI의 새로운 가능성을 열다
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300">
                        함께 시작하는 디지털 혁신
                    </p>
                </motion.div>

                {/* 공감 메시지 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        왜 모두가 AI를 어렵게만 생각할까요?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        함께 AI 시대의 새로운 가능성을 열어볼 순 없을까요?
                    </p>
                </motion.div>

                {/* 공감 포인트 */}
                <motion.div className="max-w-2xl mx-auto space-y-4 mb-16">
                    {[
                        'AI, 어디서부터 시작해야 할지 모르겠어요',
                        'ChatGPT는 써보았지만, 제대로 활용하고 있는지 궁금해요',
                        '우리 회사도 AI를 도입하고 싶은데, 방법을 모르겠어요',
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.2 }}
                            className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <span className="text-lg md:text-xl">{text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 해답 찾기 메시지 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mb-12"
                >
                    <p className="text-xl md:text-2xl text-blue-400 font-medium">
                        이제 그 해답을 함께 찾아보세요.
                    </p>
                </motion.div>

                {/* CTA 버튼 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a
                        href="#guide"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
                    >
                        <span>무료 가이드 받기</span>
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
                    <a
                        href="#youtube"
                        className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2"
                    >
                        <span>유튜브 구독하기</span>
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
