import useTranslation from "@/hooks/useTranslation";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
    code: string;
    page: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      className={cn(
        "flex flex-wrap-reverse justify-center flex-row-reverse pt-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={`/projects/${item?.id}`}
          key={item?.id}
          className="relative group block p-2 h-85 w-85"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.title} />
            <div className="p-4">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardButton>{t.project.button}</CardButton>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black relative z-10 border lg:border-none border-purple-900",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardImage = ({
  className,
  children,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}) => {
  return (
    <img
      src={cn(children, src)}
      alt={cn(children, alt)}
      className={cn(
        "p-3 brightness-50 transition-all group-hover:brightness-100 rounded-2xl duration-700",
        className
      )}
    />
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-400 tracking-wide line-clamp-1 leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "absolute h-full right-1/2 translate-x-1/2 top-67 tracking-wide transition-all duration-700",
        className
      )}
    >
      {children}
    </p>
  );
};
