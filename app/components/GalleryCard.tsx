// GalleryCard.tsx
//allery card component
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Project } from '../types/project';

interface GalleryCardProps {
  project: Project;
};

const GalleryCard: React.FC<GalleryCardProps> = ({project}) => {
  return (
    <div className="gallery-card">
      <Link href={`/projects/${project.id}`}>
        <Image src={project.imageUrl} alt={project.title} />
        <div className="card-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </div>
  )
};

export default GalleryCard;