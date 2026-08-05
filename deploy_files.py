import paramiko
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

LOCAL_BASE = r'c:\Users\vikas\work\Dhanvanti-homepage1'
REMOTE_BASE = '/var/www/dhanvanti-homepage'
HOST = '97.74.95.93'
USER = 'vpsadmin'
PASS = 'TecHn01@VPS253$'

FILES_TO_SYNC = [
    'src/app/App.tsx',
    'src/app/layout.tsx',
    'src/app/components/home/Hero.tsx',
    'src/app/components/home/Architecture.tsx',
    'src/app/components/home/LifeInside.tsx',
    'src/app/components/home/WhyDhanvanti.tsx',
    'src/app/components/home/SilentLuxuryInfo.tsx',
    'src/app/components/home/Location.tsx',
    'src/app/components/home/Gallery.tsx',
    'src/app/components/home/FloorPlans.tsx',
    'src/app/components/home/AboutDeveloper.tsx',
    'src/app/components/home/VastuSection.tsx',
    'src/app/components/layout/Navbar.tsx',
    'src/app/components/layout/Footer.tsx',
    'src/app/components/layout/DetailsBar.tsx',
    'src/app/components/layout/StickyContactBar.tsx',
    'src/app/components/ui/LightboxModal.tsx',
    'src/app/components/enquiry/EnquiryPage.tsx',
    'src/app/api/inquiry/route.ts',
    'src/lib/contact.ts',
    'src/lib/social.ts',
    'src/styles/theme.css',
    'public/logo-icon.png',
]

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
print(f'Connecting to {HOST}...')
ssh.connect(HOST, username=USER, password=PASS, timeout=15)
sftp = ssh.open_sftp()


def ensure_remote_dir(remote_dir):
    stdin, stdout, stderr = ssh.exec_command(f'mkdir -p "{remote_dir}"')
    stdout.read()


def posixpath_dirname(path):
    parts = path.rsplit('/', 1)
    return parts[0] if len(parts) > 1 else ''


def upload_file(local_path, remote_path):
    remote_dir = posixpath_dirname(remote_path)
    ensure_remote_dir(remote_dir)
    sftp.put(local_path, remote_path)


print('Uploading files...')
for rel_posix in FILES_TO_SYNC:
    local_path = os.path.join(LOCAL_BASE, rel_posix.replace('/', os.sep))
    remote_path = REMOTE_BASE + '/' + rel_posix
    print(f'  -> {rel_posix}')
    upload_file(local_path, remote_path)

print('\nVerifying /src/app/components/home/:')
stdin, stdout, stderr = ssh.exec_command('ls -la /var/www/dhanvanti-homepage/src/app/components/home/')
print(stdout.read().decode('utf-8', errors='ignore'))

print('\nVerifying /src/app/components/layout/:')
stdin, stdout, stderr = ssh.exec_command('ls -la /var/www/dhanvanti-homepage/src/app/components/layout/')
print(stdout.read().decode('utf-8', errors='ignore'))

print('\nRunning npm run build...')
stdin, stdout, stderr = ssh.exec_command('cd /var/www/dhanvanti-homepage && npm run build 2>&1')
output = stdout.read().decode('utf-8', errors='ignore')
print(output)

if 'Build error' in output or 'build failed' in output.lower():
    print('Build FAILED. Not restarting PM2.')
else:
    print('Build SUCCEEDED! Restarting PM2...')
    stdin2, stdout2, stderr2 = ssh.exec_command('cd /var/www/dhanvanti-homepage && pm2 restart dhanvanti-homepage && pm2 save')
    print(stdout2.read().decode('utf-8', errors='ignore'))

sftp.close()
ssh.close()
print('Done.')
