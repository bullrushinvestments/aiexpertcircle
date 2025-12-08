import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  contentTypes: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpecification>('api/business-specification');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchSpecification();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  const classes = clsx('p-4', {
    'bg-gray-100': !isMobile,
    'rounded-lg shadow-md': isMobile
  });

  return (
    <form className={classes}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={specification.name}
          onChange={(e) => setSpecification({ ...specification, name: e.target.value })}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={specification.description}
          onChange={(e) => setSpecification({ ...specification, description: e.target.value })}
          rows={4}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <input
          type="text"
          id="contentTypes"
          value={specification.contentTypes.join(', ')}
          onChange={(e) => setSpecification({ ...specification, contentTypes: e.target.value.split(',') })}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Specification
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
  contentTypes: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: 0,
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecification = async () => {
      try {
        const response = await axios.get<BusinessSpecification>('api/business-specification');
        setSpecification(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specification.');
        setLoading(false);
      }
    };

    fetchSpecification();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  const isMobile = useMediaQuery('(max-width:600px)');
  const classes = clsx('p-4', {
    'bg-gray-100': !isMobile,
    'rounded-lg shadow-md': isMobile
  });

  return (
    <form className={classes}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={specification.name}
          onChange={(e) => setSpecification({ ...specification, name: e.target.value })}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={specification.description}
          onChange={(e) => setSpecification({ ...specification, description: e.target.value })}
          rows={4}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contentTypes" className="block text-sm font-medium text-gray-700">Content Types</label>
        <input
          type="text"
          id="contentTypes"
          value={specification.contentTypes.join(', ')}
          onChange={(e) => setSpecification({ ...specification, contentTypes: e.target.value.split(',') })}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Specification
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;