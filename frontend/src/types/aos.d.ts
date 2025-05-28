declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    debounceDelay?: number;
    throttleDelay?: number;
    disable?: 'phone' | 'tablet' | 'mobile' | boolean | (() => boolean);
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
    disable(): void;
  };

  export default AOS;
}
