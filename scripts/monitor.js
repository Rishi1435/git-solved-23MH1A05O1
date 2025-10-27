/**
 * System Monitoring Script
 * Supports both production and development modes
 */

const ENV = process.env.NODE_ENV || 'production';

const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true
  }
};

const config = monitorConfig[ENV];

console.log('=================================');
console.log(`DevOps Simulator - Monitor`);
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? 'ENABLED' : 'DISABLED'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  
  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }
  
  // Simulated resource checks (replace with real monitoring as needed)
  const cpuUsage = config.debugMode ? (Math.random() * 100).toFixed(2) + '%' : 'Normal';
  const memUsage = config.debugMode ? (Math.random() * 100).toFixed(2) + '%' : 'Normal';
  const diskUsage = config.debugMode ? (Math.random() * 100).toFixed(2) + '% used' : 'Adequate';

  console.log(`✓ CPU usage: ${cpuUsage}`);
  console.log(`✓ Memory usage: ${memUsage}`);
  console.log(`✓ Disk space: ${diskUsage}`);
  
  if (config.debugMode) {
    console.log('✓ Hot reload: Active');
    console.log('✓ Debug port: 9229');
    if (config.verboseLogging) {
      console.log('✓ Source maps: Enabled');
    }
  }
  
  console.log('System Status: HEALTHY');
}

console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
