import {
  BarChart3,
  MapPin,
  Users,
  Landmark,
  FileText,
  Building2,
  Clock,
  Calendar,
  Receipt,
  ShieldCheck,
  Inbox,
  PenLine,
  CheckCircle2,
  Eye,
  Lock,
  Send,
  type LucideIcon,
} from 'lucide-react';

const registry: Record<string, LucideIcon> = {
  chart: BarChart3,
  pin: MapPin,
  users: Users,
  bank: Landmark,
  file: FileText,
  building: Building2,
  clock: Clock,
  calendar: Calendar,
  invoice: Receipt,
  shield: ShieldCheck,
  inbox: Inbox,
  edit: PenLine,
  check: CheckCircle2,
  eye: Eye,
  lock: Lock,
  send: Send,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const LucideComponent = registry[name] ?? Building2;
  return <LucideComponent className={className} size={size} aria-hidden="true" />;
}
