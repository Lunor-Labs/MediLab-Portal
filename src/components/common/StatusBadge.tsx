import React from 'react';
import { Clock, CheckCircle, Eye } from 'lucide-react';

interface StatusBadgeProps {
  status: 'pending' | 'ready' | 'reviewed';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'pending':
        return {
          icon: Clock,
          text: 'Pending',
          className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
        };
      case 'ready':
        return {
          icon: CheckCircle,
          text: 'Ready',
          className: 'bg-green-100 text-green-800 border-green-200'
        };
      case 'reviewed':
        return {
          icon: Eye,
          text: 'Reviewed',
          className: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      default:
        return {
          icon: Clock,
          text: 'Unknown',
          className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.className} ${className}`}>
      <Icon className="w-3 h-3 mr-1" />
      {config.text}
    </span>
  );
};

export default StatusBadge;