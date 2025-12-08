import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  name: string;
  description: string;
  type: string; // e.g., "text", "number", "file"
}

interface IFormData {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IFormData>();
  const router = useRouter();

  const onSubmit = async (data: IFormData) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {data.requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">
            {requirement.name}
          </label>
          <input
            id={`requirement-${index}`}
            type={requirement.type === 'file' ? 'file' : requirement.type}
            {...register(`requirements.${index}.description`)}
            aria-label={`${requirement.name} input`}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        className={`mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading || formState.isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading || formState.isSubmitting ? 'Loading...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  name: string;
  description: string;
  type: string; // e.g., "text", "number", "file"
}

interface IFormData {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IFormData>();
  const router = useRouter();

  const onSubmit = async (data: IFormData) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/confirmation');
    } catch (error) {
      console.error('Error submitting requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {data.requirements.map((requirement, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`requirement-${index}`} className="block text-sm font-medium text-gray-700">
            {requirement.name}
          </label>
          <input
            id={`requirement-${index}`}
            type={requirement.type === 'file' ? 'file' : requirement.type}
            {...register(`requirements.${index}.description`)}
            aria-label={`${requirement.name} input`}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        className={`mt-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading || formState.isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        {loading || formState.isSubmitting ? 'Loading...' : 'Submit Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;