'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface QnA {
    question: string;
    answer: string;
    category: string;
}

const qnaList: QnA[] = [
    {
        question: 'AI를 처음 시작하는데 어떤 것부터 배워야 할까요?',
        answer: 'ChatGPT와 같은 기본적인 AI 도구부터 시작하는 것을 추천드립니다. 이를 통해 AI의 기본 개념을 이해하고, 점차 Cursor AI나 GitHub Copilot 같은 전문 도구로 확장해 나갈 수 있습니다.',
        category: '학습 방법',
    },
    {
        question: '프로그래밍 지식이 없어도 AI를 배울 수 있나요?',
        answer: '네, 가능합니다. 최근의 AI 도구들은 코딩 지식이 없어도 사용할 수 있도록 설계되어 있습니다. 물론 프로그래밍 지식이 있다면 더 다양한 활용이 가능하지만, 기본적인 사용은 누구나 쉽게 배울 수 있습니다.',
        category: '진입 장벽',
    },
    {
        question: 'AI 도구들은 어떤 분야에서 활용할 수 있나요?',
        answer: '콘텐츠 제작, 코드 작성, 데이터 분석, 업무 자동화 등 다양한 분야에서 활용할 수 있습니다. 실제로 많은 분들이 업무 효율을 크게 높이고 있으며, 새로운 활용 사례들이 계속해서 등장하고 있습니다.',
        category: '활용 분야',
    },
    {
        question: '커뮤니티에서는 어떤 활동들을 하나요?',
        answer: 'AI 활용 사례 공유, 스터디 그룹 활동, 프로젝트 협업 등 다양한 활동이 이루어지고 있습니다. 또한 정기적인 온/오프라인 모임을 통해 회원들 간의 네트워킹도 활발히 진행되고 있습니다.',
        category: '커뮤니티',
    },
    {
        question: 'AI 도구 사용에 비용이 많이 드나요?',
        answer: '대부분의 기본적인 AI 도구들은 무료로 시작할 수 있습니다. ChatGPT의 경우 무료 버전으로도 충분히 활용 가능하며, 필요에 따라 프리미엄 기능을 선택적으로 사용할 수 있습니다.',
        category: '비용',
    },
    {
        question: '실제로 업무에 도움이 될까요?',
        answer: '네, 많은 분들이 실제 업무 효율성 향상을 경험하고 있습니다. 예를 들어, 코드 리뷰 시간 단축, 콘텐츠 제작 속도 향상, 반복 작업 자동화 등 다양한 영역에서 생산성이 크게 향상되었다는 사례들이 있습니다.',
        category: '효과',
    },
];

export default function QnASection() {
    const [activeCategory, setActiveCategory] = useState<string>('전체');
    const categories = [
        '전체',
        ...new Set(qnaList.map((item) => item.category)),
    ];

    const filteredQnA =
        activeCategory === '전체'
            ? qnaList
            : qnaList.filter((item) => item.category === activeCategory);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-12"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    AI 학습과 활용에 대한 궁금증을 해결해드립니다
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filteredQnA.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-6">
                            <div className="flex items-start mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold mr-4">
                                    Q
                                </span>
                                <h3 className="text-lg font-semibold">
                                    {item.question}
                                </h3>
                            </div>
                            <div className="flex items-start">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 font-semibold mr-4">
                                    A
                                </span>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {item.answer}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                >
                    <span>더 궁금한 점이 있다면?</span>
                    <svg
                        className="w-5 h-5 ml-2"
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
            </div>
        </motion.section>
    );
}
