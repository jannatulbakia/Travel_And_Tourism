// app/helpline/page.tsx
import { Phone, Mail, MapPin } from "lucide-react";

export default function Helpline() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          Travel Helpline
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Need help with bookings, travel info, or emergencies? 
          Reach out to us anytime.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50">
            <Phone className="text-blue-600" />
            <div>
              <p className="font-medium">Helpline Number</p>
              <p className="text-gray-600">01686434649</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50">
            <Mail className="text-blue-600" />
            <div>
              <p className="font-medium">Email Support</p>
               <p className="text-gray-600">puspitabanik213@gmail.com</p>
              <p className="text-gray-600">bakia.nimmy@gmail.com</p>
               <p className="text-gray-600">sunjanapurba1@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 border rounded-xl hover:bg-blue-50">
            <MapPin className="text-blue-600" />
            <div>
              <p className="font-medium">Head Office</p>
              <p className="text-gray-600">Cumilla, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

