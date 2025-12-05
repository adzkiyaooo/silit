import { notFound } from 'next/navigation'
import { professions } from '@/data/profession'
import Link from 'next/link'
import { ArrowLeft, Briefcase, DollarSign, Code, Calendar, MapPin, Users, CheckCircle, Star } from 'lucide-react'

interface ProfessionDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ProfessionDetailPage({ params }: ProfessionDetailPageProps) {
  const { id } = await params
  const profession = professions.find(p => p.id === parseInt(id))

  if (!profession) {
    notFound()
  }

  const formatSalary = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(0)}JT`
    }
    return amount.toLocaleString('id-ID')
  }

  // Data tambahan untuk setiap profession
  const professionDetails = {
    1: {
      skills: ['TypeScript', 'React', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'UI Libraries'],
      responsibilities: [
        'Develop responsive user interfaces',
        'Optimize web performance',
        'Implement accessibility standards',
        'Collaborate with UX designers',
        'Write clean, maintainable code'
      ],
      demand: 'High',
      experience: '1-3 years',
      location: 'Jakarta, Bandung, Surabaya, Bali'
    },
    2: {
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS'],
      responsibilities: [
        'Design and develop APIs',
        'Database design and optimization',
        'Implement security protocols',
        'Server deployment and maintenance',
        'System architecture planning'
      ],
      demand: 'Very High',
      experience: '2-5 years',
      location: 'Jakarta, Bandung, Yogyakarta'
    },
    3: {
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux', 'Scripting'],
      responsibilities: [
        'Manage cloud infrastructure',
        'Automate deployment pipelines',
        'Monitor system performance',
        'Implement security best practices',
        'Disaster recovery planning'
      ],
      demand: 'High',
      experience: '3-6 years',
      location: 'Jakarta, Surabaya, Remote'
    },
    4: {
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
      responsibilities: [
        'Develop cross-platform apps',
        'Optimize app performance',
        'Implement mobile UI/UX',
        'App store deployment',
        'Testing and debugging'
      ],
      demand: 'Growing',
      experience: '1-4 years',
      location: 'Jakarta, Bandung, Bali, Remote'
    },
    5: {
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'AWS SageMaker', 'Data Analysis'],
      responsibilities: [
        'Develop ML models',
        'Data preprocessing',
        'Model training and evaluation',
        'Deploy ML solutions',
        'Research new algorithms'
      ],
      demand: 'Very High',
      experience: '2-5 years',
      location: 'Jakarta, Singapore, Remote'
    }
  }

  const details = professionDetails[profession.id as keyof typeof professionDetails]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/profession"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Professions
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{profession.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Briefcase size={20} />
                  <span className="font-semibold">Software Engineering</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <Star size={20} />
                  <span className="font-semibold">{details.demand} Demand</span>
                </div>
              </div>
            </div>
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold">
                Rp{formatSalary(profession.salaryRange.min)} - {formatSalary(profession.salaryRange.max)}
              </div>
              <div className="text-lg opacity-90">per month</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Description & Requirements */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Code className="text-blue-500" />
                Job Description
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {profession.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {details.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-700">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Bachelor's degree in Computer Science or related field</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Strong problem-solving skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Portfolio of relevant projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Good communication skills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Ability to work in a team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Required */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {details.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full font-medium border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="space-y-8">
            {/* Job Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Job Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Salary Range</div>
                    <div className="text-xl font-bold text-gray-800">
                      Rp{formatSalary(profession.salaryRange.min)} - {formatSalary(profession.salaryRange.max)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Calendar className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Experience Required</div>
                    <div className="text-xl font-bold text-gray-800">{details.experience}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Popular Locations</div>
                    <div className="text-lg font-semibold text-gray-800">{details.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Users className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Market Demand</div>
                    <div className="text-xl font-bold text-gray-800">{details.demand}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Path */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Career Growth Path</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Junior {profession.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Senior {profession.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Tech Lead / Team Lead</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Engineering Manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>CTO / VP Engineering</span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl text-lg">
              Apply for This Position
            </button>
          </div>
        </div>

        {/* Related Professions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Professions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professions
              .filter(p => p.id !== profession.id)
              .slice(0, 3)
              .map((relatedProfession) => (
                <Link
                  key={relatedProfession.id}
                  href={`/profession/${relatedProfession.id}`}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedProfession.title}</h3>
                  <div className="text-green-600 font-semibold mb-3">
                    Rp{formatSalary(relatedProfession.salaryRange.min)} - {formatSalary(relatedProfession.salaryRange.max)}/month
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedProfession.description}</p>
                  <div className="mt-4 text-blue-600 font-medium text-sm">
                    View Details →
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Apply?</h3>
              <p className="text-gray-600">
                This position is perfect for Software Engineering graduates from SMK Telkom Malang.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Save for Later
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 font-medium">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* ID Display */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-gray-500">Professional ID:</span>
            <span className="font-bold text-gray-800">#{profession.id}</span>
          </div>
        </div>
      </div>
    </div>
  )
}