import * as THREE from 'three'

export const useAnimateFlower = (querySelector) => {

    const animateFlower = (querySelector) => {   
        if(!querySelector) return 
        
        const container = document.getElementById(querySelector);
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x4F6D58 });
        const petalMaterial = new THREE.MeshPhongMaterial({ color: 0xE2725B, side: THREE.DoubleSide }); 
        const centerMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });

        const flower = new THREE.Group();
        scene.add(flower);
        
        const flowerHead = new THREE.Group();
        flower.add(flowerHead);

        const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 4, 16);
        const stem = new THREE.Mesh(stemGeometry, stemMaterial);
        stem.position.y = -2;
        flower.add(stem);

        const petalGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        petalGeometry.scale(1, 0.2, 1.5);
        petalGeometry.translate(0, 0, 0.8);

        const petals = [];
        for (let i = 0; i < 8; i++) {
            const petal = new THREE.Mesh(petalGeometry, petalMaterial);
            petal.rotation.y = (Math.PI * 2 / 8) * i;
            flowerHead.add(petal);
            petals.push(petal);
        }

        const centerGeometry = new THREE.SphereGeometry(0.3, 32, 32);
        const center = new THREE.Mesh(centerGeometry, centerMaterial);
        flowerHead.add(center);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 300);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        let growth = 0;
        const growthSpeed = 0.020;

        function animate() {
            requestAnimationFrame(animate);
            
            if (growth < 1) {
                growth += growthSpeed;
                flower.scale.set(growth, growth, growth);
                petals.forEach((petal) => {
                    petal.rotation.x = (1 - growth) * Math.PI / 1.5;
                });
                flower.position.y = -2 + (growth * 2);
            }

            flower.rotation.y += 0.01;
            // Tilt the head toward the camera to face it directly (maintain terracotta 90-degree tilt)
            flowerHead.rotation.x = THREE.MathUtils.lerp(flowerHead.rotation.x, -Math.PI / 2, 0.02 * growth);
            
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });

        animate();            
    }

    return {
        animateFlower
    }
}