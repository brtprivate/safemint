import React from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,

} from '@mui/material';
import { formatUnits } from 'viem';

interface OrderHistoryItem {
  isStake: boolean;
  orderValue: any;
  timestamp: number;
  amount?: number;
  orderID?: any;
  orderGrowth?: any;
  growthRate?: number;
  remainingTime?: string;
  date?: string;
  isComplete?: boolean;
}

interface OrderHistoryTableProps {
  orderHistory: OrderHistoryItem[];
  orderLoading: boolean;
  formatDate: (timestamp: number) => string;
}

const OrderHistoryTable: React.FC<OrderHistoryTableProps> = ({
  orderHistory,
  orderLoading,
  formatDate
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h6"
        sx={{ color: 'primary.main', mb: { xs: 2, sm: 3 }, fontSize: { xs: '1rem', sm: '1.25rem' } }}
      >
        Order History
      </Typography>
      {orderLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, flexGrow: 1 }}>
          <CircularProgress />
        </Box>
      ) : orderHistory.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            p: 2,
            textAlign: 'center',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            flexGrow: 1
          }}
        >
          No orders yet
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Type</TableCell>
                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Amount</TableCell>
                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Growth</TableCell>
                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Date</TableCell>
                <TableCell sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Remaining Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistory.map((order, index) => (
                <TableRow key={`order-${index}`}>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color={order.isStake ? 'success.main' : 'error.main'}
                      sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                    >
                      {order.isStake ? 'STAKE' : 'UNSTAKE'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      ${order.amount?.toFixed(2) || 'N/A'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="success.main" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {order.growthRate || 0}%
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {order.date || formatDate(order.timestamp)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        color: order.remainingTime === 'Completed' ? 'success.main' :
                               order.remainingTime === 'Matured' ? 'warning.main' : 'primary.main',
                        fontWeight: 'medium'
                      }}
                    >
                      {order.remainingTime || 'Active'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default OrderHistoryTable;
