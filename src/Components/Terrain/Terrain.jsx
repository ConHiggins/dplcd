import * as THREE from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heightmap from "../../Assets/heightmap_2.png";
import maptex from "../../Assets/heightmap_tex_2.png";
import { useRef, useEffect } from "react";
import { EffectComposer } from "../../../node_modules/three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "../../../node_modules/three/examples/jsm/postprocessing/RenderPass";
import { FilmPass } from "../../../node_modules/three/examples/jsm/postprocessing/FilmPass";
import { AfterimagePass } from "../../../node_modules/three/examples/jsm/postprocessing/AfterimagePass";
import { DotScreenPass } from "../../../node_modules/three/examples/jsm/postprocessing/DotScreenPass";

const Terrain = () => {
    "Access-Control-Allow-Origin: *";
    const refContainer = useRef(null);

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(1);

        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        renderPass.renderToScreen = true;

        const filmPass = new FilmPass(1, false);
        composer.addPass(filmPass);

        const afterImage = new AfterimagePass(0.5);
        composer.addPass(afterImage);

        scene.fog = new THREE.Fog(0x332277, 150, 250);
        scene.background = new THREE.Color(0x112233);

        const texLoader = new THREE.TextureLoader();
        let o;

        const displacement = texLoader.load(heightmap, (heightmap) => {
            heightmap.repeat.set(1, 1);
            const texture = texLoader.load(maptex, (maptex) => {
                maptex.anisotropy = 16;
                // maptex.generateMipmaps = false;
                // maptex.minFilter = THREE.LinearFilter;
                // maptex.needsUpdate = true;
                //maptex.repeat.set(1,1)
                const oG = new THREE.PlaneGeometry(maptex.image.width * 0.1, maptex.image.height * 0.1, 1500, 1500);
                const oM = new THREE.MeshStandardMaterial({
                    color: 0x666666,
                    map: texture,

                    displacementMap: displacement,
                    displacementScale: 3,
                    displacementBias: 0.1,
                    normalMap: texture,
                    //normalScale: 0.1,
                    lightMap: displacement,
                    lightMapIntensity: 0.1,
                });
                o = new THREE.Mesh(oG, oM);
                //o.material.map.minFilter = THREE.NearestFilter;
                scene.add(o);
            });
        });

        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);

        const ambLight = new THREE.AmbientLight(0x88aaff, 0.5);
        ambLight.position.set(0, 10, 10);

        const plight = new THREE.PointLight(0xffaa22, 0.5, 100, 1.0);
        plight.position.set(camera.position.x, camera.position.y, camera.position.z);

        scene.add(ambLight);
        scene.add(plight);

        camera.position.z = 6;
        camera.rotation.y = 3;
        //camera.position.y = 0.5;
        camera.rotation.x = 3;
        camera.rotation.z = 1.5;

        const forwardRoll = () => {
            camera.position.y += 0.005 - camera.position.x * 0.00005;
            camera.position.x += camera.position.y * 0.00005;
            camera.rotation.z *= camera.position.x * 0.001;
        };

        const initAerial = () => {
            camera.position.z = 6;
            camera.rotation.y = 3;
            //camera.position.y = 0.5;
            camera.rotation.x = 3;
            camera.rotation.z = 1.5;
        };
        const aerial = () => {
            camera.position.y += 0.005 - camera.position.x * 0.00005;
            camera.position.x += camera.position.y * 0.00005;
        };

        var animate = function () {
            requestAnimationFrame(animate);

            //forwardRoll();
            plight.position.set(camera.position.x, camera.position.y, camera.position.z);

            o && (o.displacementScale += 10);
            // renderer.render(scene, camera);
            composer.render();
        };
        animate();
    }, []);

    return <div ref={refContainer}></div>;
};

export default Terrain;
