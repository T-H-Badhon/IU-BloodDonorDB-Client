import { Button, Card } from "flowbite-react";
import React from "react";

const BloodRequestCard = ({ bloodRequest }) => {
  return (
    <div>
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blood Group:{bloodRequest.bloodGroup}
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          date:{bloodRequest.date}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Request Person:{bloodRequest.name}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          phone:{bloodRequest.phone}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          area:{bloodRequest.area}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Reason:{bloodRequest.reason}
        </p>
      </Card>
    </div>
  );
};

export default BloodRequestCard;
