import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const loginTimestamp = localStorage.getItem("adminLoginTimestamp");
    if (loginTimestamp) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - parseInt(loginTimestamp);
      if (timeDifference < 10 * 60 * 1000) {
        // 10 minutes in milliseconds
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("adminLoginTimestamp");
      }
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem(
      "adminLoginTimestamp",
      new Date().getTime().toString()
    );
  };
  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="w-full">
      <div className="container max-w-[70rem]  min-h-[90vh] mx-auto p-4 text-black pt-36">
        <div className="flex mb-4">
          <button
            className={`mr-2 px-4 py-2 ${
              activeTab === "jobs" ? "bg-blue-500 text-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("jobs")}
          >
            Manage Jobs
          </button>
          <button
            className={`px-4 py-2  mr-2 ${
              activeTab === "registrations"
                ? "bg-blue-500 text-white"
                : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("registrations")}
          >
            View Registrations
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "contacts"
                ? "bg-blue-500 text-white"
                : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            View Contacts
          </button>
        </div>
        {activeTab === "jobs" ? (
          <JobsManager />
        ) : activeTab === "registrations" ? (
          <RegistrationsViewer />
        ) : (
          <ContactsManager></ContactsManager>
        )}
      </div>
    </div>
  );
}

function JobsManager() {
  const [jobs, setJobs] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    id: null,
    jobName: "",
    companyName: "",
    jobDescription: "",
    domain: "",
    salaryRange: "",
    officeType: "",
    jobType: "",
    jobLink: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const openModal = (job = null) => {
    if (job) {
      setCurrentJob(job);
      setIsEditing(true);
    } else {
      setCurrentJob({
        id: null,
        jobName: "",
        companyName: "",
        jobDescription: "",
        domain: "",
        salaryRange: "",
        officeType: "",
        jobType: "",
        jobLink: "",
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const fetchJobs = async () => {
    const jobsCollection = collection(db, "jobs");
    const jobSnapshot = await getDocs(jobsCollection);
    const jobList = jobSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setJobs(jobList);
  };

  const handleInputChange = (e: any) => {
    setCurrentJob({ ...currentJob, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentJob({
      id: null,
      jobName: "",
      companyName: "",
      jobDescription: "",
      domain: "",
      salaryRange: "",
      officeType: "",
      jobType: "",
      jobLink: "",
    });
    setIsEditing(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isEditing) {
      await updateJob(currentJob.id, currentJob);
    } else {
      await addJob(currentJob);
    }
    closeModal();
    fetchJobs();
  };
  const addJob = async (job: any) => {
    await addDoc(collection(db, "jobs"), job);
  };

  const updateJob = async (id: any, updatedJob: any) => {
    const jobRef = doc(db, "jobs", id);
    await updateDoc(jobRef, updatedJob);
  };

  const deleteJob = async (id: any) => {
    await deleteDoc(doc(db, "jobs", id));
    fetchJobs();
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-end">
          <button
            onClick={() => openModal()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Job
          </button>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              {/* Add any additional filters or search here */}
            </div>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Job Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Salary Range
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Office Type
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Job Type
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Job Link
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job: any) => (
                  <tr key={job.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.jobName}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.companyName}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.domain}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.salaryRange}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.officeType}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {job.jobType}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <a
                        target="_blank"
                        href={job.jobLink}
                        className="text-gray-900 whitespace-no-wrap underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button
                          onClick={() => openModal(job)}
                          className="text-blue-600 hover:text-blue-900 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed z-40 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {isEditing ? "Edit Job" : "Add New Job"}
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="mb-4 text-black space-y-4"
                >
                  <div>
                    <label
                      htmlFor="jobName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Name
                    </label>
                    <input
                      type="text"
                      id="jobName"
                      name="jobName"
                      value={currentJob.jobName}
                      onChange={handleInputChange}
                      placeholder="Enter job name"
                      className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobLink"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Link
                    </label>
                    <input
                      type="text"
                      id="jobLink"
                      name="jobLink"
                      value={currentJob.jobLink}
                      onChange={handleInputChange}
                      placeholder="Enter job domain"
                      className="mt-1 block text-black w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={currentJob.companyName}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                      className="mt-1  text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="jobDescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Description
                    </label>
                    <textarea
                      id="jobDescription"
                      name="jobDescription"
                      value={currentJob.jobDescription}
                      onChange={handleInputChange}
                      placeholder="Enter job description"
                      rows={3}
                      className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="domain"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Domain
                    </label>
                    <input
                      type="text"
                      id="domain"
                      name="domain"
                      value={currentJob.domain}
                      onChange={handleInputChange}
                      placeholder="Enter job domain"
                      className="mt-1 block text-black w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="salaryRange"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salary Range
                    </label>
                    <input
                      type="text"
                      id="salaryRange"
                      name="salaryRange"
                      value={currentJob.salaryRange}
                      onChange={handleInputChange}
                      placeholder="Enter salary range"
                      className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="officeType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Office Type
                    </label>
                    <select
                      id="officeType"
                      name="officeType"
                      value={currentJob.officeType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select office type</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="jobType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Type
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      value={currentJob.jobType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select job type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center text-black py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isEditing ? "Update Job" : "Add Job"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RegistrationsViewer() {
  const [registrations, setRegistrations] = useState<any>([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    const registrationsCollection = collection(db, "FormJoins");
    const registrationSnapshot = await getDocs(registrationsCollection);
    const registrationList = registrationSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRegistrations(registrationList);
    console.log("registractions ", registrationList);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                College
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Domain
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Rate
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                CGPA
              </th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration: any) => (
              <tr key={registration.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.phoneNumber}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.college}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.domain}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.rate}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.passOut}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContactsManager() {
  const [contacts, setcontacts] = useState<any>([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    const contactsCollection = collection(db, "contacts");
    const contactsSnapshot = await getDocs(contactsCollection);
    const registrationList = contactsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setcontacts(registrationList);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((registration: any) => (
              <tr key={registration.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.phone}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {registration.message}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminLogin({ onLogin }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
