'use client';

import Image from 'next/image';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
export default function Home() {
    return (
        <>
            <div className="bg-[#000000] min-h-screen w-full overflow-x-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative">
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

                    {/* 메인 콘텐츠 */}
                    <div className="mt-16 md:mt-24 space-y-16 md:space-y-24">
                        {/* 첫 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-8">
                                왜 모두가!
                            </h1>
                            <div className="w-full max-w-[400px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Rectangle"
                                    src="/Rectangle.svg"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </section>

                        {/* 두 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-4">
                                AI를 어렵게만 생각할까요?
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-[#FFFFFF] text-center mb-12">
                                함께 AI 시대의 새로운 가능성을 열어볼 순
                                없을까요?
                            </p>
                        </section>

                        {/* 세 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <div className="w-full max-w-[800px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Frame 4"
                                    src="/Frame 4.svg"
                                    width={800}
                                    height={311}
                                />
                            </div>
                        </section>

                        {/* 네 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <div className="w-full max-w-[800px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Frame 6"
                                    src="/Frame 6.svg"
                                    width={800}
                                    height={311}
                                />
                            </div>
                        </section>

                        {/* 다섯 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <div className="w-full max-w-[800px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Frame 5"
                                    src="/Frame 5.svg"
                                    width={800}
                                    height={311}
                                />
                            </div>
                        </section>

                        {/* 여섯 번째 섹션 */}
                        <section className="relative flex flex-col items-center">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
                                이제 그 해답을 함께 찾아보세요.
                            </h2>
                            <div className="w-full max-w-[400px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Rectangle 1"
                                    src="/Rectangle-1.svg"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </section>

                        {/* 일곱 번째 섹션 */}
                        <section className="relative flex flex-col items-center pb-24">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-6">
                                처음엔 저도 여러분 처럼 막막했습니다.
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-[#FFFFFF] text-center mb-12 max-w-[600px]">
                                하지만 AI는 어려운 기술이 아닌,
                                <br />
                                우리의 가능성을 넓혀주는 동반자라는 것을
                                <br />
                                실전 경험을 통해 깨달았습니다.
                            </p>
                            <div className="w-full max-w-[400px] mx-auto">
                                <Image
                                    className="w-full h-auto object-contain"
                                    alt="Rectangle 2"
                                    src="/Rectangle-2.svg"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#FFFFFF] text-center mb-6">
                                현장에서 검증된 노하우를 나눕니다.
                            </h1>
                        </section>
                    </div>
                </div>
            </div>
            <Page2 />
            <Page3 />
            <Page4 />
        </>
    );
}
