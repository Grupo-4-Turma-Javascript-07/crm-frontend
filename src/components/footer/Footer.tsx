import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-black text-white font-source-sans-3">
        <div className="container flex flex-col items-center py-4">
          <p className="text-x1 font-weight-700">
            CRM4U - Grupo 04 | Copyright: 2025
          </p>
          <p className="text-lg"> Acesse nossas redes sociais</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogoIcon size={48} weight='bold' />
            </a>
            <a href="https://github.com/Grupo-4-Turma-Javascript-07" target="_blank" rel="noopener noreferrer">
              <GithubLogoIcon size={48} weight='bold' />
            </a>
            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon size={48} weight='bold' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
