// Product types for the products section
export interface Product {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice?: number;
    tag?: string;
    tagColor?: string;
    features: string[];
    icon: React.ReactNode;
    gradient: string;
    popular?: boolean;
}

// Payment modal props
export interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseTitle: string;
    price: number;
}

// Navigation link type
export interface NavLink {
    href: string;
    label: string;
}

// Benefit card type
export interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    glow: string;
}
