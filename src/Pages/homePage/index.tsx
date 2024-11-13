import { AppBar, Button, Container, Toolbar, Typography, Box } from '@mui/material'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <AppBar position="static" color="transparent" elevation={0} className="border-b">
        <Container maxWidth="lg">
          <Toolbar className="justify-between p-4">
            <Typography
              variant="h6"
              component="a"
              href="/"
              className="text-blue-500 font-semibold text-2xl no-underline"
            >
              Verigen
            </Typography>
            <Box className="space-x-4">
              <Button
                variant="text"
                className="text-gray-600 normal-case"
              >
                SIGN IN
              </Button>
              <Button
                variant="contained"
                className="bg-blue-500 hover:bg-blue-600 normal-case px-6"
              >
                SIGN UP
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" className="mt-16">
        <svg viewBox="0 0 800 200" className="w-full h-auto max-w-4xl mx-auto">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.3" />
            </filter>
          </defs>
          <g filter="url(#shadow)">
            <rect x="50" y="20" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="100" y="55" textAnchor="middle" fill="#2196F3" fontSize="12">Code Upload</text>
            
            <rect x="200" y="20" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="250" y="55" textAnchor="middle" fill="#2196F3" fontSize="12">Synthesis</text>
            
            <rect x="350" y="20" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="400" y="55" textAnchor="middle" fill="#2196F3" fontSize="12">Placement</text>
            
            <rect x="500" y="20" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="550" y="55" textAnchor="middle" fill="#2196F3" fontSize="12">Routing</text>
            
            <rect x="650" y="20" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="700" y="55" textAnchor="middle" fill="#2196F3" fontSize="12">GDSII</text>
            
            <rect x="125" y="120" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="175" y="155" textAnchor="middle" fill="#2196F3" fontSize="12">Syntax Check</text>
            
            <rect x="275" y="120" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="325" y="155" textAnchor="middle" fill="#2196F3" fontSize="12">Floorplan</text>
            
            <rect x="425" y="120" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="475" y="155" textAnchor="middle" fill="#2196F3" fontSize="12">CTS</text>
            
            <rect x="575" y="120" width="100" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" strokeWidth="2" />
            <text x="625" y="155" textAnchor="middle" fill="#2196F3" fontSize="12">Finishing</text>
            
            <line x1="100" y1="80" x2="175" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="250" y1="80" x2="175" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="250" y1="80" x2="325" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="400" y1="80" x2="325" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="400" y1="80" x2="475" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="550" y1="80" x2="475" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="550" y1="80" x2="625" y2="120" stroke="#2196F3" strokeWidth="2" />
            <line x1="700" y1="80" x2="625" y2="120" stroke="#2196F3" strokeWidth="2" />
          </g>
        </svg>
      </Container>

      <Container maxWidth="md" className="mt-24 mb-16">
        <Box className="flex flex-col items-center space-y-8">
          <Typography 
            variant="h2" 
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          >
            Streamline Your Workflow
          </Typography>
          <Typography 
            variant="h5" 
            className="text-xl text-gray-600 text-center max-w-2xl"
          >
            Connect and optimize your business processes with our intelligent platform
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="bg-blue-500 hover:bg-blue-600 normal-case px-8 py-3 text-base mt-4"
          >
            GET STARTED
          </Button>
        </Box>
      </Container>
    </div>
  )
}