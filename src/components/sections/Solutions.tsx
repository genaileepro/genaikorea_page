'use client';

import { motion } from 'framer-motion';

interface Service {
    title: string;
    description: string;
    icon: string;
}

interface Value {
    title: string;
    description: string;
}

const services: Service[] = [
    {
        title: 'AI 웹/앱 개발',
        description: '최신 AI 기술을 활용한 맞춤형 웹/앱 서비스를 개발합니다.',
        icon: '🌐',
    },
    {
        title: '비즈니스 자동화',
        description: '반복적인 업무를 AI로 자동화하여 업무 효율을 높입니다.',
        icon: '⚡',
    },
    {
        title: '데이터 기반 의사결정',
        description: 'AI 분석을 통해 더 나은 비즈니스 의사결정을 지원합니다.',
        icon: '📊',
    },
];

const values: Value[] = [
    {
        title: 'AI 전문 개발팀의 노하우',
        description: '풍부한 경험을 가진 전문가들이 함께합니다.',
    },
    {
        title: '풍부한 프로젝트 경험',
        description: '다양한 산업 분야의 프로젝트 경험을 보유하고 있습니다.',
    },
    {
        title: '지속적인 기술 지원',
        description: '프로젝트 이후에도 지속적인 기술 지원을 제공합니다.',
    },
];

export default function Solutions() {
    return (
        <motion.section
            className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20"
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
                        코드러너 AI 솔루션
                    </h2>
                </motion.div>

                {/* 맞춤형 서비스 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-400">
                        맞춤형 서비스
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105"
                            >
                                <div className="text-4xl mb-4">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4">
                                    {service.title}
                                </h4>
                                <p className="text-gray-300">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center mt-8"
                    >
                        <a
                            href="#portfolio"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                        >
                            <span>포트폴리오 보기</span>
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
                </motion.div>

                {/* 차별화된 가치 */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-400">
                        차별화된 가치
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.6 + index * 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105"
                            >
                                <h4 className="text-xl font-bold mb-4">
                                    {value.title}
                                </h4>
                                <p className="text-gray-300">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.2 }}
                        className="text-center mt-8"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg gap-2"
                        >
                            <span>프로젝트 문의하기</span>
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
                </motion.div>
            </div>
        </motion.section>
    );
}
