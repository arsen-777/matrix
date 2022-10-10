import { ReactComponent as check } from '../../assets/images/check.svg';
import { ReactComponent as chartLine } from '../../assets/images/chartLine.svg';
import { ReactComponent as money } from '../../assets/images/money.svg';
import { ReactComponent as question } from '../../assets/images/question.svg';

export const totalAmounts = [
  {
    id: 1,
    amount: 25,
    icon: check,
    description: 'SIGNUPS',
    color: '#01AAAA',
  },
  {
    id: 2,
    amount: 1000,
    icon: chartLine,
    description: 'PROFIT',
    color: '#1F7BB6',
  },
  {
    id: 3,
    amount: 350,
    icon: money,
    description: 'COMMISSIONS',
    color: '#FBCF71',
  },
  {
    id: 4,
    amount: 300,
    icon: question,
    description: 'PENDING COMMISSION',
    color: '#01AAAA',
  },
];
