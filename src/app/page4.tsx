'use client';

import Image from 'next/image';

export default function Page4() {
    return (
        <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative">
                {/* 첫 번째 섹션 */}
                <section className="pt-24 flex flex-col items-center">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-8">
                        그렇지만,
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] text-center mb-12">
                        내가 공부하는 시간보다 전문가에게 맡기고 싶지
                        않으신가요?
                    </p>
                    <div className="w-full max-w-[500px] mx-auto mb-24">
                        <Image
                            className="w-full h-auto object-contain"
                            alt="Rectangle-5"
                            src="/Rectangle-5.svg"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </section>

                {/* AI 솔루션 섹션 */}
                <section className="mb-24 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] mb-12">
                        코드러너 AI 솔루션
                    </h2>

                    <p className="text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] mb-8">
                        여러분의 비즈니스 문제를 해결하기 위해
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] mb-24">
                        전문가에게 맡기는 맞춤형 AI 솔루션을 제공합니다.
                    </p>
                </section>

                {/* 왜 코드러너 섹션 */}
                <section className="mb-24 text-center">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] mb-8">
                        그렇다면,
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] mb-12">
                        왜 코드러너 일까요?
                    </h3>
                    <div className="w-full max-w-[800px] mx-auto mb-12">
                        <Image
                            className="w-full h-auto object-contain"
                            alt="AI Solution"
                            src="/Frame 14.svg"
                            width={800}
                            height={400}
                            priority
                        />
                    </div>
                </section>

                {/* 맞춤형 컨설팅 섹션 */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] mb-8">
                        차별화된 가치
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] mb-6">
                        풍부한 경험을 가진 전문가가 함께 합니다.
                    </p>
                    <div className="border-t border-white my-12" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* AI 웹/앱 개발 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                🖥
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                AI 웹/앱 개발
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                최신 AI 기술을 활용한 맞춤형 웹/앱 서비스를
                                개발합니다.
                            </p>
                        </div>

                        {/* 비즈니스 자동화 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                ⚙
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                비즈니스 자동화
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                반복적인 업무를 AI로 자동화하여 업무 효율을
                                높입니다.
                            </p>
                        </div>

                        {/* 데이터 기반 의사결정 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                📊
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                데이터 기반 의사결정
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                AI 분석을 통해 더 나은 비즈니스 의사결정을
                                지원합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 차별화된 가치 섹션 */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* AI 전문 개발팀 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                🌐
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                AI 전문 개발팀의 노하우
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                풍부한 경험을 가진 전문가들이 함께합니다.
                            </p>
                        </div>

                        {/* 풍부한 프로젝트 경험 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                ⚡
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                풍부한 프로젝트 경험
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                다양한 산업 분야의 프로젝트 경험을 보유하고
                                있습니다.
                            </p>
                        </div>

                        {/* 지속적인 기술 지원 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-[#e03131] text-5xl mb-6">
                                🔨
                            </div>
                            <h3 className="text-xl md:text-2xl text-white mb-4">
                                지속적인 기술 지원
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                프로젝트 이후에도 지속적인 기술 지원을
                                제공합니다.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 주요기관 섹션 */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] mb-16">
                        강의 및 개발지원으로 함께한 주요기관
                    </h2>
                    <div className="w-full max-w-[1200px] mx-auto">
                        <Image
                            className="w-full h-auto object-contain"
                            alt="Performance Statistics"
                            src="/Frame 21.svg"
                            width={1200}
                            height={400}
                            priority
                        />
                    </div>
                </section>

                {/* 실적 섹션 */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#2F3133] rounded-3xl p-8 text-center">
                            <h3 className="text-[#e03131] text-6xl mb-4">
                                100%
                            </h3>
                            <p className="text-white text-xl">
                                맞춤형 상담 진행
                            </p>
                        </div>
                        <div className="bg-[#2F3133] rounded-3xl p-8 text-center">
                            <h3 className="text-[#e03131] text-6xl mb-4">
                                100%
                            </h3>
                            <p className="text-white text-xl">
                                성공적인 프로젝트 경험
                            </p>
                        </div>
                        <div className="bg-[#2F3133] rounded-3xl p-8 text-center">
                            <h3 className="text-[#e03131] text-6xl mb-4">
                                100%
                            </h3>
                            <p className="text-white text-xl">고객 만족도</p>
                        </div>
                    </div>
                </section>

                {/* CTA 섹션 */}
                <section className="text-center pb-24">
                    <button className="bg-[#2F3133] text-white text-2xl md:text-4xl py-8 px-16 rounded-full hover:bg-[#3F4143] transition-colors">
                        제작 상담 신청하기
                    </button>
                </section>
            </div>
        </div>
    );
}
