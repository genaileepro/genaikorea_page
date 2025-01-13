'use client';

import { motion } from 'framer-motion';

export default function VideoSection() {
    const videos = {
        intro: {
            id: 'yTTQZZyoLNE',
            title: 'ChatGPT 무료강의의 1화 시청하기',
        },
        lecture: {
            id: 'Jpc5T5ixnC8',
            title: 'Cursor AI 무료강의의 1화 시청하기',
        },
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full py-8 md:py-12 flex flex-col items-center justify-center"
        >
            <div className="container max-w-5xl px-4">
                <h2 className="text-3xl font-bold text-center mb-8 md:mb-10">
                    영상 콘텐츠
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-3 text-center">
                            {videos.intro.title}
                        </h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videos.intro.id}`}
                                title={videos.intro.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-3 text-center">
                            {videos.lecture.title}
                        </h3>
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videos.lecture.id}`}
                                title={videos.lecture.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
