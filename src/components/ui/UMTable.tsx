"use client";

import { Table } from "antd";

type UMTableProps = {
  loading: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, size: number) => void;
  onTableChange?: (pagination: any, filters: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = false,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize,
        total: totalPages,
        pageSizeOptions: ["5", "10", "20"],
        showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      pagination={paginationConfig}
      columns={columns}
      dataSource={dataSource}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
