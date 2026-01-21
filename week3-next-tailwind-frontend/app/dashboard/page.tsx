"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 max-w-5xl space-y-6">

      {/* Page heading */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* Top dashboard cards (reference-like) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Primary Card" variant="primary" footer="View Details" children={undefined}/>
        <Card title="Warning Card" variant="warning" footer="View Details" children={undefined} />
        <Card title="Success Card" variant="success" footer="View Details" children={undefined} />
        <Card title="Danger Card" variant="danger" footer="View Details" children={undefined}/>
      </div>

      {/* User card (shows Button + Badge clearly) */}
      <Card
        title="User Card"
        footer={
          <Button onClick={() => setOpen(true)}>
            Open Modal
          </Button>
        }
      >
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-800">
            Ria Malhotra
          </span>
          <Badge text="Admin" color="green" />
        </div>
      </Card>

      {/* Modal */}
      <Modal
        isOpen={open}
        title="Confirmation"
        onClose={() => setOpen(false)}
      >
        Are you sure you want to continue?
      </Modal>

    </div>
  );
}
