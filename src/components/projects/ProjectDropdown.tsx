'use client';

import { useEffect, useState } from 'react';
import { createListCollection } from '@chakra-ui/react';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';
import { projectService } from '@/services/projectService';
import { Project } from '@/types/types';

interface ProjectSelectProps {
  onSelect: (projectId: number) => void;
}

export default function ProjectSelect({ onSelect }: ProjectSelectProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await projectService.getAll();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  const list = createListCollection({
    items: projects.map((project) => ({
      label: project.projectName,
      value: String(project.id),
    })),
  });

  const handleSelect = (details: { value: string[] }) => {
    const selectedId = details.value[0];
    setSelectedProject([selectedId]);
    onSelect(Number(selectedId));
  };

  return (
    <SelectRoot
      value={selectedProject}
      onValueChange={handleSelect}
      collection={list}
    >
      <SelectTrigger>
        <SelectValueText placeholder='Select a project' />
      </SelectTrigger>
      <SelectContent>
        {list.items.map((project) => (
          <SelectItem key={project.value} item={project}>
            {project.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
