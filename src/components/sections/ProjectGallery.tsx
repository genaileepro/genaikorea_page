'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

const projects = [
    {
        id: 1,
        title: '깔끔한방 웹사이트 구축',
        description: '청소 가상기업 웹사이트 개발',
        source: '깔끔한방',
        date: '2024.08.15',
        image: '/cleanroom.png',
        link: 'https://www.clean-room.co.kr/',
    },
];

export default function ProjectGallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleImageError = (projectId: number) => {
        setImageErrors((prev) => ({
            ...prev,
            [projectId]: true,
        }));
    };

    const ProjectSkeleton = () => (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Skeleton className="w-full h-40" />
            <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-1/3" />
            </div>
        </div>
    );

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-4 md:py-6 flex flex-col items-center justify-center text-center"
        >
            <h2 className="text-3xl font-bold text-center mb-6 md:mb-8">
                Project Gallery
            </h2>
            <div className="relative w-full max-w-3xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading
                        ? Array(1)
                              .fill(null)
                              .map((_, index) => (
                                  <ProjectSkeleton key={index} />
                              ))
                        : projects.map((project) => (
                              <motion.div
                                  key={project.id}
                                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                                  whileHover={{ y: -5 }}
                                  transition={{ duration: 0.2 }}
                              >
                                  <div className="relative h-40 bg-gray-100 dark:bg-gray-700">
                                      {!imageErrors[project.id] ? (
                                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                              <Image
                                                  src={project.image}
                                                  alt={project.title}
                                                  fill
                                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                  className="object-cover transition-transform duration-300 hover:scale-105"
                                                  priority={project.id === 1}
                                                  onError={() =>
                                                      handleImageError(
                                                          project.id
                                                      )
                                                  }
                                              />
                                          </div>
                                      ) : (
                                          <div className="w-full h-full flex items-center justify-center text-gray-500">
                                              <span>
                                                  이미지를 불러올 수 없습니다
                                              </span>
                                          </div>
                                      )}
                                  </div>
                                  <div className="p-4">
                                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                                          {project.title}
                                      </h3>
                                      <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                                          {project.description}
                                      </p>
                                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                          <span>{project.source}</span>
                                          <span>{project.date}</span>
                                      </div>
                                      <a
                                          href={project.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="mt-3 inline-block text-blue-500 hover:text-blue-600 transition-colors text-sm"
                                      >
                                          자세히 보기 →
                                      </a>
                                  </div>
                              </motion.div>
                          ))}
                </div>
            </div>
        </motion.section>
    );
}
