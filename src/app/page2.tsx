'use client';

import Image from 'next/image';
import YouTube from 'react-youtube';
import Link from 'next/link';

export default function Page2() {
    return (
        <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative">
                {/* 3개의 특징 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                        <div className="text-5xl mb-6">📚</div>
                        <h3 className="text-2xl md:text-3xl text-white mb-4">
                            GPT 실전 활용 가이드
                        </h3>
                        <p className="text-base md:text-lg text-gray-300">
                            실무에서 활용할 수 있는 GPT 프롬프트 작성법과 활용
                            전략을 배웁니다.
                        </p>
                    </div>

                    <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                        <div className="text-5xl mb-6">💡</div>
                        <h3 className="text-2xl md:text-3xl text-white mb-4">
                            AI 비즈니스 적용 사례
                        </h3>
                        <p className="text-base md:text-lg text-gray-300">
                            다양한 산업에서 AI를 성공적으로 도입한 실제 사례를
                            분석합니다.
                        </p>
                    </div>

                    <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                        <div className="text-5xl mb-6">🔨</div>
                        <h3 className="text-2xl md:text-3xl text-white mb-4">
                            즉시 활용 가능한 실습
                        </h3>
                        <p className="text-base md:text-lg text-gray-300">
                            이론을 넘어 실전에서 바로 적용할 수 있는 실습 위주의
                            학습을 진행합니다.
                        </p>
                    </div>
                </div>

                {/* 강의 경력 섹션 */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl text-white mb-8">
                        GPT 출시 후 다수 기관 강의 출강
                    </h2>
                    <div className="border-t border-white my-8" />
                    <div className="space-y-4 text-white text-lg">
                        <p>• 2023년 모두의 연구소 ChatGPT VOD 강의제작</p>
                        <p>
                            • 아모레 퍼시픽, 섬유산업연합회, 한국
                            콘텐츠진흥원(방송작가협회) 등 다수 기업 강의 진행
                        </p>
                        <p>
                            • 대학교(교수부), 고등학교, 시/군/구 공무원대상,
                            일자리창출센터 등 공기관 다수 기업강의 진행
                        </p>
                    </div>
                </section>

                {/* 이미지 갤러리 */}
                <section className="mb-24">
                    <Image
                        src="/Group 427319476.svg"
                        alt="강의 이미지"
                        width={1558}
                        height={962}
                        className="w-full h-auto"
                    />
                </section>

                {/* 공모전 섹션 */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl text-white mb-8">
                        기업과의 공모전 콜라보레이션
                    </h2>
                    <div className="border-t border-white my-8" />
                    <Image
                        src="/Group 427319477.svg"
                        alt="공모전 이미지"
                        width={1542}
                        height={954}
                        className="w-full h-auto"
                    />
                    <p className="text-lg text-white mt-8">
                        • 2025년 '푸른뱀의 해' 맞이 dob studio와 함께 생성AI
                        이미지 공모전을 개최
                    </p>
                </section>

                {/* 커뮤니티 섹션 */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl text-white mb-4">
                        함께 성장하는 AI 커뮤니티
                    </h2>
                    <p className="text-xl text-white mb-8">
                        지식과 경험을 나누며, 함께 미래를 만들어갑니다
                    </p>
                    <div className="border-t border-white my-8" />

                    {/* 유튜브 섹션 */}
                    <div className="mb-16">
                        {/* 로고 배너 */}
                        <div className="pt-8 md:pt-12 flex justify-center">
                            <Image
                                className="w-[80%] max-w-[600px] h-auto"
                                alt="Banner"
                                src="/banner.svg"
                                width={899}
                                height={237}
                                priority
                            />
                        </div>
                        <h3 className="text-3xl text-white mb-4 mt-20">
                            생성 AI 코리아 유튜브 채널
                        </h3>
                        <p className="text-xl text-white mb-4">
                            함께 배우고, 함께 성장하는 공간
                        </p>
                        <div className="space-y-4 text-lg text-white mb-8">
                            <p>
                                • 최신 트렌드 소개: 빠르게 변화하는 AI 산업의
                                흐름을 실시간으로 전달합니다.
                            </p>
                            <p>
                                • 실전 활용법: ChatGPT를 비롯한 다양한 AI 도구의
                                효과적인 사용법을 소개합니다.
                            </p>
                            <p>
                                • 전문가 인터뷰: AI 분야의 선도적인 전문가들과의
                                심층 대화를 통해 통찰을 얻을 수 있습니다.
                            </p>
                        </div>
                        <div className="flex justify-end gap-4 mb-8">
                            <Link
                                href="https://www.youtube.com/@생성AI코리아/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[200px] text-center bg-red-600 text-white py-3 px-6 rounded-full text-lg hover:bg-red-700 transition-colors"
                            >
                                유튜브 구독하기
                            </Link>
                        </div>
                    </div>

                    {/* 네이버 카페 섹션 */}
                    <div className="mb-16">
                        <h3 className="text-3xl text-white mb-4">
                            네이버 카페 생성 AI 코리아 커뮤니티
                        </h3>
                        <p className="text-xl text-white mb-4">
                            함께 나누고, 함께 성장하는 공간
                        </p>
                        <div className="space-y-4 text-lg text-white mb-8">
                            <p>
                                • 질문과 답변: AI 관련 궁금증을 언제든지
                                질문하고, 전문가/동료들로부터 답변 받을 수
                                있습니다.
                            </p>
                            <p>
                                • 자료 공유: 유용한 자료와 튜토리얼을 공유하여,
                                실무에 즉시 적용할 수 있는 지식을 축적합니다.
                            </p>
                            <p>
                                • 네트워킹: 다양한 배경을 가진 회원들과의 교류를
                                통해 새로운 아이디어와 협업 기회를 모색할 수
                                있습니다.
                            </p>
                        </div>
                        <div className="flex justify-end gap-4 mb-8">
                            <Link
                                href="https://cafe.naver.com/GenAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[200px] text-center bg-green-600 text-white py-3 px-6 rounded-full text-lg hover:bg-green-700 transition-colors"
                            >
                                커뮤니티 가입하기
                            </Link>
                        </div>
                    </div>

                    {/* 무료 강의 섹션 */}
                    <div className="mb-16">
                        <h3 className="text-3xl text-white mb-4">
                            무료 강의 제공
                        </h3>
                        <p className="text-xl text-white mb-4">
                            체계적인 학습으로 AI의 기초부터 실전까지
                        </p>
                        <div className="space-y-4 text-lg text-white mb-8">
                            <p>
                                • 기초부터 고급까지: AI의 기본 개념을 탄탄히
                                다진 후, 실무에서 바로 활용할 수 있는 고급
                                기술을 배웁니다.
                            </p>
                            <p>
                                • 실습 중심의 학습: 이론에 그치지 않고, 실제
                                프로젝트에 적용할 수 있는 실습 위주의 강의로
                                구성됩니다.
                            </p>
                            <p>
                                • 전문가의 피드백: 강의 후 전문가로부터 직접
                                피드백을 받아 학습 효과를 극대화할 수 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* 강의 미리보기 */}
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="flex flex-col items-center">
                                <div className="w-full aspect-video mb-4">
                                    <YouTube
                                        videoId="yTTQZZyoLNE"
                                        opts={{
                                            width: '100%',
                                            height: '100%',
                                            playerVars: {
                                                autoplay: 0,
                                            },
                                        }}
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="bg-zinc-800 text-white py-3 px-6 rounded-full text-lg text-center mx-auto shadow-lg hover:bg-zinc-700 transition-colors">
                                    ChatGPT 무료강의 1화부터 시청하기
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-full aspect-video mb-4">
                                    <YouTube
                                        videoId="Jpc5T5ixnC8"
                                        opts={{
                                            width: '100%',
                                            height: '100%',
                                            playerVars: {
                                                autoplay: 0,
                                            },
                                        }}
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="bg-zinc-800 text-white py-3 px-6 rounded-full text-lg text-center mx-auto shadow-lg hover:bg-zinc-700 transition-colors">
                                    Cursor AI 무료강의 1화부터 시청하기
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
