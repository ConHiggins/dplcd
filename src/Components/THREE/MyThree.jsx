import * as THREE from "three";
import { MeshStandardMaterial, VideoTexture, sRGBEncoding } from "three";

// import {EffectComposer} from '../../../node_modules/three/examples/jsm/postprocessing/EffectComposer';
// import {RenderPass}     from '../../../node_modules/three/examples/jsm/postprocessing/RenderPass';
// import {GlitchPass} from '../../../node_modules/three/examples/jsm/postprocessing/GlitchPass';
// import {AfterimagePass} from '../../../node_modules/three/examples/jsm/postprocessing/AfterimagePass';

import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import { useEffect, useRef } from "react";
import side1 from "../../Assets/cubesides/SIDE1.mp4";
import side2 from "../../Assets/cubesides/SIDE2.mp4";
import side3 from "../../Assets/cubesides/SIDE3.mp4";
import side4 from "../../Assets/AJ_CUBE.mp4";
import side5 from "../../Assets/cubesides/SIDE5.mp4";
import side6 from "../../Assets/cubesides/SIDE6.mp4";

function MyThree() {
    "Access-Control-Allow-Origin: *";
    const refContainer = useRef(null);
    const textureVid1 = useRef(null);
    const textureVid2 = useRef(null);
    const textureVid3 = useRef(null);
    const textureVid4 = useRef(null);
    const textureVid5 = useRef(null);
    const textureVid6 = useRef(null);

    const videos = [textureVid1, textureVid2, textureVid3, textureVid4, textureVid5, textureVid6];

    const usingVideos = true;

    useEffect(() => {
        if (usingVideos) {
            videos.forEach((tex) => {
                if (tex.current) {
                    tex.current.load();
                }
            });

            videos.forEach((tex) => {
                if (tex.current) {
                    tex.current
                        .play()
                        .then(() => {
                            //  is playing.
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
        }

        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(2);

        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);

        const ambLight = new THREE.AmbientLight(0xdddddd, 0.01);
        const light = new THREE.DirectionalLight(0xffffff, 1.0);
        const backLight = new THREE.DirectionalLight(0x223344, 1.0);
        ambLight.position.set(0, 10, 10);
        backLight.position.set(0, 0, 0.5);
        light.position.set(0, 0, -3);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        // const iCubes = [
        //   [
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //   ],
        //   [
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //   ],
        //   [
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.5,0.5),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.4,0.4),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.3,0.3),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //     new THREE.PlaneGeometry(0.2,0.2),
        //   ]
        // ]

        const orbGeo = new THREE.SphereGeometry(1.75, 2, 2);

        const textures = videos.map((vid) => {
            const tex = new THREE.VideoTexture(vid.current);
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.colorSpace = THREE.SRGBColorSpace;

            return tex;
        });

        const material = [
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[0], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[1], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[2], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[3], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[4], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
            new THREE.MeshBasicMaterial({ color: 0xffffff, map: textures[5], side: THREE.DoubleSide, transparent: true, opacity: 1 }),
        ];

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            sizeAttenuation: true,
        });

        const orbMat = new THREE.MeshLambertMaterial({ color: 0xf5eeda, side: THREE.BackSide });
        const orb = new THREE.Mesh(orbGeo, orbMat);

        orbMat.alpha = 0.5;

        //material.needsUpate = true;
        material.visible = true;
        material.opacity = 0.0;
        material.emissiveIntensity = 1000;
        var cube = new THREE.Mesh(geometry, material);
        let toras = [];
        let torAccels = [];
        let toraVels = [];

        for (let i = 0; i < 140; i++) {
            const oG = new THREE.PlaneGeometry(0.001, 0.001); //THREE.TorusGeometry(0.01, 0.004, 8, 24);
            const oM = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const o = new THREE.Mesh(oG, oM);
            o.position.x = i * 0.02 * Math.random();
            o.position.y = i * 0.02 * Math.random();
            o.position.z = i * 0.02 * Math.random();
            toras.push(o);
            torAccels.push({ x: 0, y: 0, z: 0 });
            toraVels.push({ x: 0, y: 0, z: 0 });
            cube.add(o);
        }

        // const innerCubes = iCubes.map(g => {
        //   return g.map(h => {return new THREE.Points(h, particlesMaterial)});
        // })

        // innerCubes[0].forEach((p,i) => {
        //   const sign = i % 2 == 0 ? 1 : -1;
        //   p.position.x = 0.5 * sign;
        //   p.rotation.y = Math.PI * 0.5;
        // })

        // innerCubes[1].forEach((p,i) => {
        //   const sign = i % 2 == 0 ? 1 : -1;
        //   p.position.y = 0.5 * sign;
        //   p.rotation.x = Math.PI * 0.5;
        // })

        // innerCubes[2].forEach((p,i) => {
        //   const sign = i % 2 == 0 ? 1 : -1;
        //   p.position.z = 0.5 * sign;
        // })

        scene.add(ambLight);
        scene.add(light);
        scene.add(backLight);
        scene.add(cube);
        scene.add(orb);

        // innerCubes.forEach(a => {
        //   a.forEach(c => cube.add(c));
        // })

        cube.position.y = 0;
        scene.background = null;
        camera.position.z = 5;

        // const composer = new EffectComposer(renderer);
        // const renderPass = new RenderPass(scene, camera);
        // composer.addPass(renderPass);
        // renderPass.renderToScreen = true;

        // const glitchPass = new GlitchPass();
        // //composer.addPass(glitchPass);

        // const afterImage = new AfterimagePass();
        // composer.addPass(afterImage);

        var animate = function () {
            requestAnimationFrame(animate);
            //material.needsUpdate = true;
            cube.rotation.x += 0.0148;
            cube.rotation.y += 0.0125;
            cube.rotation.z += 0.00618;

            camera.position.z *= 0.9935;

            if (material[0].opacity > 0.05) {
                material.forEach((m) => {
                    m.opacity *= 0.998;
                });
            }

            // innerCubes.forEach((c,i) => {
            //   const total = innerCubes.length;
            //   c.rotation.x += (cube.rotation.x - c.rotation.x)*0.01*(total-i+1);
            //   c.rotation.y += (cube.rotation.y - c.rotation.y)*0.01*(total-i+1)
            //   c.rotation.z += (cube.rotation.z - c.rotation.z)*0.01*(total-i+1)
            // })

            orb.rotation.x += (cube.rotation.x - orb.rotation.x) * 0.001;
            orb.rotation.y += (cube.rotation.y - orb.rotation.y) * 0.001;
            orb.rotation.z += (cube.rotation.z - orb.rotation.z) * 0.001;

            toras.forEach((t, i) => {
                let vert = [0, 0, 0];
                switch (i) {
                    case 0:
                        vert = [0, 0, 0];
                        break;
                    case 20:
                        vert = [1, 0, 0];
                        break;
                    case 40:
                        vert = [0, 1, 0];
                        break;
                    case 60:
                        vert = [0, 0, 1];
                        break;
                    case 80:
                        vert = [1, 1, 0];
                        break;
                    case 100:
                        vert = [0, 1, 1];
                        break;
                    case 120:
                        vert = [1, 0, 1];
                        break;
                    case 140:
                        vert = [1, 1, 1];
                        break;
                }
                torAccels[i].x = (cube.position.x + vert[0] - t.position.x) * (i + 1) * 0.0000016;
                torAccels[i].y = (cube.position.y + vert[1] - t.position.y) * (i + 1) * 0.0000015;
                torAccels[i].z = (cube.position.z + vert[2] - t.position.z) * (i + 1) * 0.0000012;
                toraVels[i].x += torAccels[i].x;
                toraVels[i].y += torAccels[i].y;
                toraVels[i].z += torAccels[i].z;
                t.position.x += toraVels[i].x;
                t.position.y += toraVels[i].y;
                t.position.z += toraVels[i].z;
                t.rotation.x += toraVels[i].x;
                t.rotation.y += toraVels[i].y;
                t.rotation.z += toraVels[i].z;
            });
            renderer.render(scene, camera);
            //composer.render();
        };
        animate();
    }, []);
    return (
        <div style={{ pointerEvents: "none" }}>
            <div ref={refContainer}></div>
            <video
                ref={textureVid1}
                type="video/mp4"
                id="video"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side1} />
            </video>
            <video
                ref={textureVid2}
                type="video/mp4"
                id="video2"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side2} />
            </video>
            <video
                ref={textureVid3}
                type="video/mp4"
                id="video3"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side3} />
            </video>
            <video
                ref={textureVid4}
                type="video/mp4"
                id="video4"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side4} />
            </video>
            <video
                ref={textureVid5}
                type="video/mp4"
                id="video5"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side5} />
            </video>
            <video
                ref={textureVid6}
                type="video/mp4"
                id="video6"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
                allow="autoplay"
                width="0"
                height="0"
                style={{ opacity: 0 }}
            >
                <source src={side6} />
            </video>
        </div>
    );
}

export default MyThree;
