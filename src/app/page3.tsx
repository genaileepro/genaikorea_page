import Image from 'next/image';

export default function Page3() {
    return (
        <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative">
                {/* 첫 번째 섹션 */}
                <div className="text-center pt-[177px] mb-40">
                    <h1 className="text-4xl md:text-6xl text-white mb-8">
                        무료강의를 듣다보면,
                    </h1>
                    <Image
                        src="/Rectangle-1.svg"
                        alt="Rectangle-1"
                        width={500}
                        height={500}
                        className="mx-auto my-8"
                        priority
                    />
                    <p className="text-xl md:text-3xl text-white mt-8">
                        AI를 통해 직접 문제해결을 해보고 싶더라고요!
                    </p>
                </div>

                {/* 두 번째 섹션 */}
                <div className="text-center mb-40">
                    <h2 className="text-4xl md:text-6xl text-white mb-8">
                        그러나!
                    </h2>
                    <Image
                        src="/Rectangle-4.svg"
                        alt="Rectangle-4"
                        width={500}
                        height={500}
                        className="mx-auto my-8"
                        priority
                    />
                    <p className="text-xl md:text-3xl text-white mt-8">
                        1:1로 알려주는데는 비용이 많많치 않습니다!
                    </p>
                </div>

                {/* 컨설팅 소개 섹션 */}
                <div className="text-center mb-40">
                    <h2 className="text-4xl md:text-6xl text-white mb-8">
                        1:1 AI 컨설팅
                    </h2>
                    <p className="text-xl md:text-3xl text-white mb-4">
                        여러분의 문제해결을 위한 적합한 방법을 찾아
                    </p>
                    <p className="text-xl md:text-3xl text-white">
                        생성형 AI 전문가에게 1:1 맞춤형 AI 컨설팅을 받아보세요.
                    </p>
                </div>

                {/* 맞춤형 컨설팅 섹션 */}
                <div className="mb-40">
                    <h2 className="text-2xl md:text-4xl text-white mb-4">
                        맞춤형 컨설팅
                    </h2>
                    <p className="text-xl text-white mb-8">
                        상담을 통해 고객에게 적합한 AI를 컨설팅 해드립니다.
                    </p>
                    <p className="text-lg text-white mb-8">
                        (이미 계약 된 고객의 프로젝트를 수행하고 있기 때문에
                        상담비용은 부과 됩니다.)
                    </p>
                    <div className="border-t border-white my-16" />

                    {/* 컨설팅 카드 섹션 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {/* LLM 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-5xl mb-6">⌨</div>
                            <h3 className="text-2xl md:text-3xl text-white mb-4">
                                LLM(언어모델)
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                GPT, claude, Lamma, gemini 등 고객에게 적합한
                                모델 및 API 추천 등 원하는 부분을 교육 및 컨설팅
                                합니다.
                            </p>
                        </div>

                        {/* IMAGE 모델 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-5xl mb-6">🎨</div>
                            <h3 className="text-2xl md:text-3xl text-white mb-4">
                                IMAGE 모델
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                Midjourney 등 이미지 생성 툴 및 StableDiffusion,
                                Flux, comfy UI 등 오픈소스 이미지 모델에 대한
                                설치 및 운용방법에 대하여 교육 및 컨설팅 합니다.
                            </p>
                        </div>

                        {/* Cursor AI 개발 카드 */}
                        <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                            <div className="text-5xl mb-6">🖱</div>
                            <h3 className="text-2xl md:text-3xl text-white mb-4">
                                Cursor AI 개발
                            </h3>
                            <p className="text-base md:text-lg text-gray-300">
                                맞춤형 상담 후 AI 개발 교육 및 컨설팅을 통해,
                                고객이 원하는 문제를 직접 해결 할 수 있는 여건을
                                마련합니다.
                            </p>
                        </div>
                    </div>

                    {/* 전문가 섹션 */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                            {/* AI 전문 개발팀 카드 */}
                            <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                                <div className="text-5xl mb-6">🌐</div>
                                <h3 className="text-2xl md:text-3xl text-white mb-4">
                                    AI 개발 전문가
                                </h3>
                                <p className="text-base md:text-lg text-gray-300">
                                    풍부한 경험의 전문가가 함께합니다.
                                </p>
                            </div>

                            {/* 가치중심 카드 */}
                            <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                                <div className="text-5xl mb-6">⚖</div>
                                <h3 className="text-2xl md:text-3xl text-white mb-4">
                                    가치중심의 컨설팅
                                </h3>
                                <p className="text-base md:text-lg text-gray-300">
                                    무조건 비싼 컨설팅을 지양합니다.
                                    <br /> 상담은 한 시간 이내로 진행 - 3.0
                                    <br /> 컨설팅은 시간 당 - 5.0
                                </p>
                            </div>

                            {/* 전문가 판단 카드 */}
                            <div className="bg-[#2F3133] rounded-3xl p-8 transition-transform hover:scale-105">
                                <div className="text-5xl mb-6">📊</div>
                                <h3 className="text-2xl md:text-3xl text-white mb-4">
                                    전문가의 판단
                                </h3>
                                <p className="text-base md:text-lg text-gray-300">
                                    풍부한 경험을 가진 전문가의 역량으로 상담의
                                    내용에 따라 컨설팅 및 서비스 의뢰의 영역을
                                    합리적으로 판단해드립니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
