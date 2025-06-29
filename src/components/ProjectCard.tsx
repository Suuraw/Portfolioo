import { Card } from "@/components/ui/card";
import { Folder, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectCard({
  title,
  description,
  tags,
  liveLink,
  devLink,
}: {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  devLink: string;
}) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(devLink);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="relative p-6 bg-card border-card-border hover:border-card-border-hover transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <Folder className="flex-none w-5 h-5 text-purple-blue" />
        <div className="flex flex-col gap-1">
          <div>
            <h3 className="text-purple-blue font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-tag-background text-purple"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Icons pinned to bottom-right */}
      <div className="absolute bottom-4 right-6 flex gap-3">
        {liveLink && (
          <Link href={liveLink} onClick={(e) => e.stopPropagation()}>
            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </Link>
        )}
        {devLink && (
          <Link href={devLink} onClick={(e) => e.stopPropagation()}>
            <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </Link>
        )}
      </div>
    </Card>
  );
}
