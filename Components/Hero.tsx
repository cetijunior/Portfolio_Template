/* eslint-disable @next/next/no-img-element */
import styles from '../styles/About.module.css';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "CJ.Portfolio",
            "44 Mekate",
            "Test Test Test",
        ],
        loop: true,
        delaySpeed: 700,
    });

    return (
        <div className='relative h-screen t flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-48 w-48 transition-all duration-300 filter grayscale-0 hover:grayscale mx-auto object-cover'
                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWEhISEhIZEhIYEhkfHRgYEh8SGBAZJSEnJyUhJCQpLjwzKSw4LSQkNDo0OEZKNzc3KDFISkhKSjxCNz8BDAwMEA8PGBIRGTEdGB0/MT8/MT8xPz8/PzE/PzQxPzQ0MzQ0ND80NDQ0MT8xNDQ0MTE0MTExPzExMTExMTQxNP/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADoQAAEDAgQEAwUIAgEFAQAAAAEAAhEDIQQSMUEFUWFxIoGRBjKhsfATQlJiwdHh8SNyFBVDc4KSY//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACMRAAICAgICAwEBAQAAAAAAAAABAhEDIRIxQVEEIjJxYRP/2gAMAwEAAhEDEQA/AKhtdtwTvcTuuMq+KBHu/dsVX0mNloJAcNbER+6mVKJuC6JP/wBFee4pGhMc+vAzMbMn/Z0pPqEggAyXWOaAef6ILmkZQSCAdBt2TK7y5zWSSBAMctdEOJ1kxzpiYgj12T26EuN7joI0MoYeAAdeZ5g6KDUxAh4bMG1gTl8+i5KylpB3PbmN3EgnwjWApD6n4vDEDSdb6KPRY9wDg08riIiNJR6tN+UgjL4tdJP0UGdT7o7/AMkAe8MpGgdf1S/5DoIgmwiTbVDaypYFuXW5bvyTnuhri8wAdhBKKjfQHYRrhIv4ZO3yRH123jwgeaqf+VylR62IcTlm8Xvsqxwt9k3L0W3/AD2/dlwFtEJ2KG1uxVWaoiAQABPMd9dF11SNCDBAsNOiqscV4Ftk5+Kpg3aXHqU77Y2LGjlr+yrKck5tQCYg+pUhh2mYA1Oh5I8Y+g3L2WNIg2d4b9SB+yv8O2kwSx4ccsiCDB0JPaVlMxAHaYO37rn2xMtAAJHLTqklii9oZTa7NsNgNISIWd4fxNzGhj/G0ctWq/oVmvALXSPl0SuLQykmPASPNOlcJSjDQF2Ei8LoC44c0JJwakuOMSHDOXlozQc0CYjfuivdUcHFpIA369D+6JkYQQWwBqC4gO8vVHYSBIptDT+YnNHMT+iSxYpFexj2mMjsxAI3udgUPFUntPhacwAPhEQNx3/lW4IdEuYwG8HRdqGo0GKmbkBbSN/RC2MopkPA4qDndTJkDUBvbVSKeGp3dUH2hdO+RjByjc9V14zAODi4iJBdKFmMwQIJsLgjquu+gt8dMkU2BjQIGQutBvcb9UPH1C8sNNwYzLMuGYz935KKyuWPtBGkFuaB0XcbimRmyDM4kQLAdfVdGMnLR3/T6hK9amKYcajqlSNCIGvyVNVqucSTPQckOq+SAZg9NkE1dZ1jQXi61wgoohKTkHc+xGp6H4JjGReBrOot2Qi+4IG2sbnS3NFyEyS6NNBonbFSCtJGzbDc77bfBDe86QZNjf1Ka4OH37HURy/Toml5tYAhl/ryQCHD2gAEFoidIHYHdHm2oIAmDFpNlHzncFugsZgbybItOnnzFjSTcnINANTYadUtjUJ7z2g6d0WkIFrmfOeiAdp6mzTffRSCIAi8NnQkjzOqNnUPaeVrx+5TxULXBwOVwMg21TG+osJ590zU9+WkfXzXWCjY4DFtqMDmm9pG7SpLtFkMJi3035m8iCDoQtSK2am18RmaDEzCjKNPRSMrQFrZcpbNkDDjdSAgwoIGpJApJRjIVagIBIEAA6kFyDRec0AkCTbQxey6+q4AAtsANBJDeqEaByipTdbNJvdx6RyA+KCIWFBmToNI0XS8bQItH3h+6a1wc0giIO3veSF9naCYI3AnrCISS0GTyB03nYErpfJBJvOo8U9kHOABeTEjb+kKgSJA1BFgdO/NCjiRVDbkmwuTMAdFU4itmcToNABsFK4lVMNp7xLhpfYfJVzQSeQESRuVoxxpWxZd0caS7SAJ5TPROLBEAXP0P1SzAfok12n+w6c05yEGiRyknpawRXaduqE2LH8h+P8ASK0beSAThFoB3jWe/wCq7kuTpLvgPr4rjNjyBP7fqisMeTR5lAI5o7nfTVXnAsEC0lzCS4hwIBcXgTlbA2mSewVMxpJDGiXOIA7krcYYGiSzK17Q3KSHHxiAIPLTQKGadKi+KN7KN/s+XPY2mchc65e2GN5jp6eSpHtGY5SIzESBZ4BidlsuO48fZGozMCQWhxIkvJ0sNgTbkAsFj35RDDciN0cMpS2xcqjH+h34po3gwTFpvZPpYmnPvQ1o6CFRNOYg6nteB9BPYdYudxfzWrijNyZffaMnUX3+Mq54LipY6mXA5TI5wsUI2t5/XJTeG4rI9jr637boOGjlPZ6Jh22UghReH4ljxAseymALLJU9mmO0cASSKSATE16hBBJGaJifetHquNrN8OzgbtAiO3yUilwuo83pug2GxF7mdtY5Ky4dwUsGU02n82ctAg3He4Q1RNQdlLTpPJAy3zggHxDMCNehVnieHYiqXve1rMzdGMFNo2ADRp3WgZTDcthI+7mnPbaykEACTodSOnzuhyZRQSKLBcBAa0uIeQYLXSBtEQVOxGEp02PqBjQGBxj3dL3mxNuvwVm5w+7oBEZoP8rNe12KLKH2cyXuA/8AUXg+gXRTlJBlUUY2tVc9z6jj43Ok+ZSaQAADMG/qExu7unxP8J1Mb9Zv5LaZUCpt02RQ3S2/bZJluunmrbh/BnvGYnICNxJcpSmo9lYY5T6KxgANzaAOohFI2mJtubnbv0WopcBpRBGbmSdVMZwum2QKbCOrZPqov5EfRoXxZeWYtlHkQRI3iw/nZdYDrcEmT+UzC2f/AEmkbGi0W2cWlV2I9mnXNN8i0B9z/wDX8IxzxfegS+PKPWykwtXJUp1IzFr2kDnBBhbTDY9j2yxr3gus5hztDZ91zdnbX5TKx2LwlSm6KjS118v4XnmCo+SO8RmA13JRlFT2hE3HTL72jrszspMM5Ic8AghjyAMsjUiL9SsrxM+IHeOW6nsAHZQeJEZm9By3VcUeNIlkfK2V72xJA5DX1XKdSQCNYuEYD6HxUdwh1tztsVoM5JkGCNDuPruniNZMzyQqZ1OgiOxT2H9p6onGq9nOIgZWk+IWvqW/Vlr2ukBeZcMxAZUa7Y2NtAbfyvR8PIa0HWFlzRp2XxPVBjOySU/JJRLBWU2iQCRbX59vNPyGTBF2zI05dvRNeCbTE6EWMbX/AL3QqmIaC4kSTaGwkoaw7nyS3bNY6hu36ID8RlmXZjG1zdRauIed4He580BOo+xXL0Gq4hzvyjaNukrI+11SDTb+UnW8z/C05PyWR9qG5q7B/wDmIPmZVYKmTm7RXsb4GzYSSeybOZwa282ATalXQGw0FoEI/C3sZ/ldqfdHIc/NPJ60CEU3s0HCuGBrQ58F553A7K8o0zzWfw3HqervhsrvB8WouAh4HcQsU4ye2ejCUEqiTm0yjsB7pUqgIkXR6USo0UsczqEnO+oRCQf6XXNQo4hVGgggtBHW4Wd4rwD71EZT+Amx7ct1rSNOSi1jr0TRlKL0LKMZKmYCph3tMOBYeUa9lVcRBDgDqNf9l6Hj8NTqNyuERod2nmsPx3BllQA3EeE2EwtuHKpOn2Yc2FxVroqCbxr5Jrmzbf8Aj+l0jmnsG62GIDSdoBqDvzUhtwI301mVHqWeSdHHXa38I9Lcna/n9SuOCA3lejcKxWenTdMnIL9YXm8a8t/VbngIcGMj3cjVLKrRTG6ZfZkkOUlmNAOpiXHU25C3wQM/Jczad03P9QmSBY4mVzMmlw9LpubQogCAlZn2oYM9N0CSwt+M/XdaOVlfaR5NYAfdYB3mSmj2LLopMSXOhsQSQOoCvsBwMOa3MZMc9OVlV8LpZ67Z0DSf0WzBDGlxMADXVJkk1pF8ME1bILPZhkGHuDiNTdMd7PPaQQ+/azkyrx2o2S2mSyYzOfkny2UvhnGKlZ4Y2kZIOjzbyIUnz7stUb6LXhxc1oY43AVnTdeVVjNNxB1giCp+GqgxsoS2XROLlFxGLLZjZPqvA3UNxBk6jmlQSpxXHK0wymbbhuaFBqcSxZNwdLDKRK0n2tNglzQBzMNHxUvC4qk8eEg9QQ75KilXSJSi/Zin8Uqn7rg/cQRKicVxIqMAeYdEidlv8ThabxcB1+dws5xzhtPJuL6g3VITXJaoEoPi9mGcyZA5/wBpTYwjYqg5jjPunfRBe0HT0not0ZWeZONMDU0kbDmiMI8MHUkm+qcxstcgUvdAGoTky1wWGL3MYBMuAdb3RuvQMNSDGhoCx3s08ioW7loJMrakqGR+C+NeR4I7JJoSUSpCnyHdNC4V2Lx6QqCHAPVccOWi6R8ki7ouOOecLJ+0hP2xi3hbqVqpNrLL+07f8w/8bYPO5Rj2BjPZhk1Kh1IDR81sqbARdZT2TbeoOrb+q2dBihlf2NmBfUj1eHMfqNRymV3D8LYy9PwmIloyGFYBsaptWoYtbqo8n0XryQH02sMwS/8A2JUrBNsFFf8AElTKDgAOyDQyB4t5uu4WCQJg7TomPMkhOazSNQhRwLE4MkPa9ramZhGYiSwkaidFnH8GrAnK0AEj3XAXjUHUDot3hiDAIv8ANSTRadQJ6hdGTiLJJ9mSpMxVPLkcazQBOez+sFS+KHNTmIPI6q8fRA2sq3irR9mUU7kjnSjSMji8KHN8lnKzMriDqN1rqmizvGKeUhw31W2DpmHLG0QiQLINMQ4jpI80V7TZNqe+D+VaTGWvASftqcTodOn6LegrIeyVLxve4yAI21K1jT6KGTstDoKNElyfMJKZUr52nzXZ5JpItvdcJnROIOzclwb/ABXLb/0ukjY/sgcdBGsXVbxjBCrTsPGBLSfl5qcSf7XCYvYLjih9mAW1KrHAhwDZBEEXK2NB6qmMbnzADNETEEhWFN0KGXbNmD8kpz014sZsANV2m2ULGMJIZsBJ6lRXZoIrHZnSNFLcDC7hKOwUmtQgXXN7GSorc97qZREwRcbqHWoGbaylg3uZUaCZa50Ed0WrQC7oj1Utj+aCKfRdNtlKwOmRsbjmt8I1VJjMU5wImyNjqbsxMEhVtYHcH0WiCQkrI1VypuOD/GTyureq5VXGj/jPMrRHsyT6ZUUzPzTH3DXcnQm0Qd9Yjkp3DcEXnKDABBdzidloRiZpeC4UtpgTDj4j3KvKDCAJUPAtsToJU8k2213UZvZWC1Y9hG57pLjQkkKFeBPrsFwHoNTvulmH9FMznnZOKPJ+oTdNvglm5/NMJNyfkuOOnTqmkdUytXYwBz3NYL+8YB/dVGJ9pKLbNDqhHIZG/H9lyi30BtIumm43U+ksE72mqFzYDWNDhIAkkTcSVu8M8EA7ETPRRzRa2afjyTtE5jouUyuZuDBHxUWpixJvpZAr43QDf6hZ1FmvkiwwtQybGOWsKTWqvdsSeZsq3AOJBv8AH66Kyr1Ia0zeL9UGqZ1kUVBcGx6CUSjRDntcdAZ7lQjVOcjfX9FNw1YXvoVzTQ/LwXbYIQnhBoVhzRH8kgiQN/YKp4s9mQiQDyCLxTF5Rlbr8lnar5JJMq2ON7FnKtAqhUB76f2gdUBNNhBdEKXUfYlZbFy+o46AWA2tzWyKMU2EZL6ji0e+4kNF9StVgsIKTMuriZJ5lU3s++mKhab1Mpgg2B3HeFoHnXfrCtFaMknsm8OPhPdTQbH9VEwI/wAfnryUkjQfyoy7ZaP5QQAWSSb3vPmEkg5Wbxr5aprj0S0+Gmq6J0uRHpCcUa98AyYETJsG9T0WX4p7Sato+H85949ht9aI3tZjy0NptN3CXDmJsD8/RY4gmTCrGKq2RlJ3SDVsQ5xzFxc46lxzFDdUHYpgYfoo9MNb1dz/AGTMRDqVImC45R8SvQfZbGB9IMmXM8PWPun9PJYEEnsrTgmP+wqtcT4HWcOnPyUcseUTTglxkbg4UkzM9E5lKmIa4gdDqpTKgIBFwd0OqwHUSsNs9OMU3sLSZTggEidxp6KSKQ+/UzCNAFEw2EB3j4IrcK8zDp8wkbNKxx9j34Vhkh94i6j1cO9ugtM67LhY8EgkgjzT6TahPvQP9UU2JLGl5GMrPaLgyD+iuMNVzMB6KI+g1zYdczM6GVIpNDQUJNMktEPF4IPvMGdVXV+Hta0uJJMaK4qPVdjK1souT8U0JPwLKn2ZXiLnCm9wtBABI+8Tp8/RZriVd7ozOJ8oWp9pXhtOnT51CTA3j+Qs5WoyIi/Nbsb1Z5+ZU6IGGrOa4Fpgg2PJaaj7SiJqUyQT7zDv1BWcOEIMfqi08OdPhsVptGSmb3hPGsO8BrKkP/C7wH46+quD8esea8kr0Sy4u2bg3yq54L7RVKZDSS+nEZS4+H/U7fJSljvaKRnWmejMHlzhJQeG8Rp1gTTfcCS0jxt7j9V1S4v0V5IizbQkRyUDitaq1o+xbmc50SNWTpAPPnoIUuvUDecC8NGY+gv6c+oVXi8czDtL3gOrOA8AIlttLARHOOmgTxQsmZnjFB7Kha8y4RJmQ4m++uqrCVY4nHOrF1R7QCYFhAAGkKIWCB4T6hVv2Ra8oEwIzGeaazWAJPIXUiIs5zWW0AzOQbCkdaNgCTy3Qy5s38R5Aw1nnumVK33WAhp1n3ndynNwZi+p+CH9H/huPZTiGdhpvIzM0jQt/haVgGhWN9mMLkpCpoX1S0dmtv8AE/BazD1JImxj4rBmilJ0elgk3FWSmMbeCQntpHZyVMgAza6kEgiFnNSbXRGdRdvfzSayEYuiIXJXAk35OtKbWqIdWqB3UR9UlFKxGxVapJgXQ2Uj7zvREp0DqbDkuYmpEiNk3KtICje2Y72keXVcrfuUy6PxQ4SFErFpaHNu06GPeRuJZxiW1b5AQ0xvO31yUSg0te+kdnSP9TpC3w/CPPy/tgYJIAgbLrG6HQcz6JVZa6Ii6GcU1sy45rWA1KrEzy0HIaRBgggg9oVE7wkidDqrB+Ja4QAQ7n+ih4mlEOGmipxdWSck2HwGOexwc1xBBsQYLeySgtKS4Ns2HHKpa8EPc0gyQHEgOiPDOhmbgC3NZvKXvLne403v8FIxL6j3lzmm99A3z7obQ4QMktA/FvzKXpDPbO0nkuEDwAbWA6BEexp6Do4ye5/hcb9oT7oAjRMdSJ9+oAOhhK2MkcqVWtGVgA7alRskSXanQfupbWN/7Y/9iPkuDDydZvfqusLVg8MzxSeSnsYXuDWA5nWF4TA2+iv/AGUwBNZryLQSOUDf1SSfkZKtF5WwIo08LTFw0vk/iJiSpGQ2IsQpvGaE02O/C6PX+kOgyWhYsj2ehg/JGZxKJBBBHTQ8lJpcRpkXMCE51Bjj4myef1qm1OFU3RBLDBEgWgqdxK/ZA63Em6Ak9hopFF73iwyiNSnYbhdNnXuNApTgEJSXgZJvsiHC8zPyRGUQNkUBdcLJG2HiBqFV+LNiFNqFBZRDszn2psGZ55j8PmjBNukdJqMbZlPaaGUaDP8AuPqGoeYaLN9VX8RwxeBUZZ7Rb845IHGse6tXdUdoXWGzGjQImCrkTTcTIsO2xXoxTikeZNqTb9gaNZlRsEZSLGTdu0H9/VMqYUAhpvtMaIvEMKQftaY8QHiH4xuornlzQWEuaB7sgPaP1HZWXtEJf6OqYduWYjwzNgLdFADwQWO9Uq4LQCKhIPVAawu0HoNFVXRF9gEkc4R+uWexBXUKZ1lnWwD2AZmvpg6Ta8aKK+mdnOB/2KSSmVGNpOkS4kdyj06AFyLpJIMMQrjlaTy+PRGo04AnWJPddSS+BhFhNgJPIa9F6J7PcPFOkwH3soBPx+ZKSSWXQ0ey3xdEup1Gi7iwkdxcfEKq4dUDmggyCAQkksmXo2YOmSzTXWgpJLOa0GEpZZSSXHHS3mhPKSSAQdLDueYFhqSdGhUntlxEMpjD0/C2xPN7uZ+uSSS1YIqzH8iTujBlnPdSaQDwGE5arfdP4h+6SS1mMPh8QWnJUsTodndQmYnB5SXsGZhu5g1HVp5pJIrsD6BtwbKoLmuJjXNTv0khL/owMQ+XEmAGkARzSSTqTF4oiVcK9hkA5Rva/WF1JJNyZNxVn//Z'
                alt='heroimg'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>
                    Fullstack Feveloper
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link className='transition-opacity duration-150' href="#about">
                        <button className={styles.heroButton}>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className={styles.heroButton}>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className={styles.heroButton}>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className={styles.heroButton}>Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className={styles.heroButton}>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero