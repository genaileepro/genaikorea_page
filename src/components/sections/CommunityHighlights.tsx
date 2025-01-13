'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CommunityMember {
    name: string;
    role: string;
    achievement: string;
    testimonial: string;
}

const communityMembers: CommunityMember[] = [
    {
        name: '김성장',
        role: '프론트엔드 개발자',
        achievement: 'AI로 코드 리뷰 시간 70% 단축',
        testimonial:
            'AI를 활용한 코드 리뷰 방법을 배우고 실제 업무에 적용했더니, 리뷰 시간이 크게 줄었어요. 다른 팀원들도 이 방법을 도입하기 시작했습니다.',
    },
    {
        name: '이창의',
        role: '콘텐츠 크리에이터',
        achievement: '월 콘텐츠 제작량 2배 증가',
        testimonial:
            'ChatGPT로 콘텐츠 구조를 잡고 초안을 작성하니, 더 많은 양질의 콘텐츠를 만들 수 있게 되었어요. 구독자 수도 꾸준히 증가하고 있습니다.',
    },
    {
        name: '박효율',
        role: '프로덕트 매니저',
        achievement: '업무 자동화로 30% 시간 절약',
        testimonial:
            'AI 도구들을 활용해서 반복적인 업무를 자동화하니, 중요한 의사결정에 더 많은 시간을 쓸 수 있게 되었어요. 팀의 생산성이 크게 향상되었습니다.',
    },
];

// 미리 정의된 Unsplash 이미지 ID 배열
const portraitImageIds = ['rDEOVtE7vOs', 'ILip77SbmOE', 'QXevDflbl8A'];

export default function CommunityHighlights() {
    const [memberImages, setMemberImages] = useState<string[]>([]);

    useEffect(() => {
        // Unsplash 이미지 URL 생성
        const images = portraitImageIds.map(
            (id) => `https://source.unsplash.com/${id}/400x400`
        );
        setMemberImages(images);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl mx-auto px-4 py-20"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pretendard">
                    AI로 성장하는 커뮤니티
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    실제 AI를 활용해 성장을 경험한 커뮤니티 멤버들의 이야기
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {communityMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                    >
                        {memberImages[index] && (
                            <div className="relative w-24 h-24 mx-auto mb-4">
                                <Image
                                    src={memberImages[index]}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">
                            {member.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {member.role}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                            {member.achievement}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            {member.testimonial}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
