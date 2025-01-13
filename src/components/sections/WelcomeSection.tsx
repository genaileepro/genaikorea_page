'use client';

import { motion } from 'framer-motion';

export default function WelcomeSection() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* 메인 헤드라인 */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center py-20"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    왜 모두가 AI를 어렵게만 생각할까요?
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-12">
                    함께 AI 시대의 새로운 가능성을 열어볼 순 없을까요?
                </p>

                {/* 공감 포인트 */}
                <motion.div className="max-w-2xl mx-auto space-y-4 text-left mb-12">
                    {[
                        'AI, 어디서부터 시작해야 할지 모르겠어요',
                        'ChatGPT는 써보았지만, 제대로 활용하고 있는지 궁금해요',
                        '우리 회사도 AI를 도입하고 싶은데, 방법을 모르겠어요',
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                            className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-lg"
                        >
                            <span className="text-lg">{text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA 버튼 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#guide"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                    >
                        무료 가이드 받기
                    </a>
                    <a
                        href="#youtube"
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors"
                    >
                        유튜브 구독하기
                    </a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
