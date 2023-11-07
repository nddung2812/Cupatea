"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className='p-4'>
      <Modal isOpen onClose={() => { } } title="Test" description="Test Desc">children</Modal>
    </div>
  )
}

export default SetupPage;