export default function Dash() {
    return(
        <div className="p-6 bg-gray-100 min-h-screen">
        {/* Welcome Section */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-sm flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Welcome To</h2>
            <h1 className="text-2xl font-bold">Your Task Management Area</h1>
            <p className="text-gray-500 text-sm">You don’t have any projects yet! You can create the companies now!</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md">Create Companies</button>
          </div>
          <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
        </div>
  
        {/* Statistics */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { count: 2, label: "Companies you own" },
            { count: 20, label: "Consultants employed" },
            { count: 9, label: "Employees" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-200 flex items-center justify-center rounded-full">
                <span className="text-green-700 font-bold">{item.count}</span>
              </div>
              <span className="text-gray-600 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
  
        {/* Graphs */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm h-64">Total Submissions (Graph Placeholder)</div>
          <div className="bg-white p-6 rounded-lg shadow-sm h-64">Submission Overview (Graph Placeholder)</div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {/* Work Progress */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-lg font-semibold">Work Progress</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
              {["Radhika Rao", "Bharath", "Radhika Rao", "Bharath"].map((name, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-gray-500 text-sm">Start Date: 12 Jan</p>
                  </div>
              ))}
              </div>
          </div>
  
          {/* Activity Feed */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-lg font-semibold">Activity Feed</h2>
              <div className="mt-2 space-y-4">
              {[
                  { name: "rajitha", message: "Subhash was submitted for Infotech." },
                  { name: "Sharath", message: "Srinu was submitted for Tesla." },
                  { name: "Ram", message: "Ram completed his 10th submission today." },
              ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                      <p className="text-gray-700 font-medium">@{activity.name}</p>
                      <p className="text-gray-500 text-sm">{activity.message}</p>
                  </div>
                  </div>
              ))}
              </div>
          </div>
          </div>
      </div> 
    );
}